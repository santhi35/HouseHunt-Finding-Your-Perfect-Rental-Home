import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";
import { LandlordProvider } from '../context/LandlordContext';
import { AuthProvider } from "../context/AuthContext";
import PropertyList from "./PropertyList";
import Rooms from './Rooms';
import Landlordin from "./Landlordin";
import Landlordup from "./Landlordup";
import Payment from "./Payment";
import Footer from "./Footer"
import Dashboard from "./Dashboard";
import AddProperty from "./AddProperty";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        < LandlordProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/listing" element={<PropertyList />} />
            <Route path="/properties/:property_id/rooms" element={<Rooms />} />
            <Route path="/landlordin" element={<Landlordin />} />
            <Route path="/landlordup" element={<Landlordup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addproperty" element={<AddProperty />} />
           
            <Route path="/properties/:property_id/rooms/:id/payment" element={<Payment />} />



          </Routes>
          <Footer />
        </div>
        </LandlordProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
