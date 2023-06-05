import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../common/styles.css";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("User Logout Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2, bgcolor: "white", color: "white" }}
    >
      <Typography variant="h1" color={"#60bf70"} fontWeight={"bold"}>
        AI GPT3 Clone
      </Typography>
      {loggedIn ? (
        <NavLink className="text_link" to="/login" onClick={handleLogout} p={1}>
          Logout
        </NavLink>
      ) : (
        <>
          <NavLink className="text_link" to="/register" p={1}>
            Sign Up
          </NavLink>
          <NavLink className="text_link" to="/login" p={1}>
            Sign In
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;
