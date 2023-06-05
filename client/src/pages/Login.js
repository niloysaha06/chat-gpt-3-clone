import {
  Alert,
  Box,
  Button,
  Collapse,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(email, password);

  //mediaquery
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  // const notify = () => toast('Here is your toast.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");
    try {
      const { data } = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      toast.success("User Login Successfully");
      localStorage.setItem("authToken", true);
      navigate("/");
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.massage) {
        setError(err.massage);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Sign In</Typography>
        <TextField
          label="email"
          type="email"
          required
          margin="normal"
          fullWidth
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="password"
          type="password"
          required
          margin="normal"
          fullWidth
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2, bgcolor: "#60bf70" }}
        >
          Sign In
        </Button>
        <Typography className="text_login_login" mt={2}>
          Don't have and account?{" "}
          <Link style={{ textDecoration: "none" }} to="/register">
            Please Register
          </Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Login;
