import React from "react";
import './App.css'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import UserMgt from "./Pages/UserMgt";
import TheatreMgt from "./Pages/TheatreMgt";
import MovieMgt from "./Pages/MovieMgt";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />

          <Route path="" element={<DashboardLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-mgt" element={<UserMgt />} />
            <Route path="/theatre-mgt" element={<TheatreMgt />} />
            <Route path="/movie-mgt" element={<MovieMgt />} />

          </Route>
      <Route path="*" element={<Navigate to="/sign-in" />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
