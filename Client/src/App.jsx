import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import InternshipList from "./Pages/InternshipList";
import InternshipDetails from "./Pages/InternshipDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="InternshipList" element={<InternshipList />} />
          <Route path="/internships/:id" element={<InternshipDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
