import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from"./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRouter from "./components/ProtectedRouter";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/login" element={<Login />} />
      <Route path = "/register" element={<Register />} />

      <Route path = "/dashboard" element={
          <ProtectedRouter>
          <Dashboard />
          </ProtectedRouter>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App