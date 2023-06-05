import './App.css';
import {Routes, Route} from "react-router-dom"
import { useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {createTheme} from "@mui/material/styles"
import { themeSettings } from './theme';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));
  return (
    <>
    <ThemeProvider theme={theme}>
     <CssBaseline/>
     <Toaster/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login'  element={<Login/>}/>
     </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
