// import React, { useState } from 'react';
import './App.css';
import Launch from './pages/launch/Launch';
import Login from './pages/auth/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// 

function App() {

  return (
    
    <Router>
      <div className='p-8 border-2 border-slate-700 h-screen w-screen flex flex-col'>
      <h1 className="bg-[#FAFAFA] text-slate-700 text-center w-full hover:shadow-md hover:shadow-blue-300 transition-all duration-200 hover-eae-in-out py-2">Smart FHIR RIS/PACS App using VisualDX</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/launch" />} />
        <Route path="/launch" element={<Launch  />} />
        <Route
          path="/auth/login"
          element={ <Login />}
          />
      </Routes>
          </div>
    </Router>
  );
}

export default App;
