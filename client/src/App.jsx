import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Home, Login, Signup, CreateEvent } from './pages';
import RSVP from "./pages/RSVP";

function App() {
  return (
    <Router>
      <div className="App bg-orange-50">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/RSVP" element={<RSVP />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;