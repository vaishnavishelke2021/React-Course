import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import MainOutlet from "./Components/MainOutlet";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <div className="w-[80%] h-[95vh] text-white mx-auto tracking-[1px]">
        <Navbar />

        <Routes>
          <Route path="/" element={<MainOutlet />}>
            <Route index element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
