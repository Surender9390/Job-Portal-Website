import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Jobs from "./components/Jobs/Jobs";

import Login from "./components/Login/Login";
import UserLogin from "./components/Login/UserLogin";
import AdminLogin from "./components/AdminLogin/AdminLogin";

import Register from "./components/Register/Register";
import UserRegister from "./components/Register/UserRegister";
import AdminRegister from "./components/Register/AdminRegister";


import PostJob from "./components/PostJob/PostJob";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />

        {/* LOGIN FLOW */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />

        {/* REGISTER FLOW */}
        <Route path="/register" element={<Register />} />
        <Route path="/register/user" element={<UserRegister />} />
        <Route path="/register/admin" element={<AdminRegister />} />
        

        {/* ADMIN */}
        <Route path="/admin/post-job" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App;
