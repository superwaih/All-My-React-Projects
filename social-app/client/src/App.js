import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import {BrowserRouter, Routes, Route, useNavigate, Navigate} from "react-router-dom"
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  
  return (
    <BrowserRouter>
    <Routes >
    <Route path="/" 
      exact 
      element={user ? <Home /> : <Register />} 
      />
      <Route path="/login" 
      exact 
      element={user ? <Home /> : <Login />} 
      />
      <Route path="/profile/:username" exact element={ <Profile />} />
      <Route path="/register" exact 
      element={user ? <Home /> : <Register />} 
      />


 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
