import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import DashboardLayout from './components/DashboardLayout'; // หน้าหลักของเว็บ

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/dashboard" element={<DashboardLayout />} /> {/* หน้าเว็บหลัก */}
        </Routes>
    );
}

export default App;
    