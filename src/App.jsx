import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const token = true;

  return (
    <>
      <Routes>
        {token && (
          <>
            <Route element={<Dashboard/>}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route
              path="/login"
              element={<Navigate to="/" />}
            />
            <Route
              path="/register"
              element={<Navigate to="/" />}
            />
          </>
        )}
        {!token && (
          <>
            <Route path="/" element={<Navigate to="/login"/> }/>
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;