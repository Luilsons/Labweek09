import React, { useState } from 'react';
import logo from './logo.svg'; 
import './App.css'; 

function App() {
  const [studentInfo] = useState({
    title: "Welcome to Fullstack Development - I",
    subtitle: "React JS Programming Week09 Lab exercise",
    studentId: "Student ID: 101275514", 
    name: "Student name: Luilson Sousa",   
    college: "George Brown College, Toronto, Canada"
  });

  return (
    <div className="App">
      <header className="App-header">
        {}
        <img src={logo} className="App-logo" alt="logo" />
        
        {}
        <h1>{studentInfo.title}</h1>
        <h2>{studentInfo.subtitle}</h2>
        <p><strong>{studentInfo.studentId}</strong></p>
        <p><strong>{studentInfo.name}</strong></p>
        <p>{studentInfo.college}</p>
      </header>
    </div>
  );
}

export default App;
