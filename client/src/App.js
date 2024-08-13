import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./Context/userContext";
import Header from "./components/Header/Header";
import Footer from ".//components/Footer/Footer";
import Home from "./components/Home/Home";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Login from "./components/Login/Login";
import Client from "./components/Client/Client";
import About from "./components/About/About";
import Support from "./components/Support/Support";
import Account from "./components/Account/Account";

//Added the Router

function App() {
  return (
    <UserContext>

     
      
        <Routes to="/">
       
          <Route path="" element={(<div><Header /><Home /><Footer /></div>)} />
          <Route path="/client" element={(<div><Header /><Client /><Footer /></div>)} />
          <Route path="/account" element={ (<div><Header /><Account /><Footer /></div>)} />
          <Route path="/about" element={  (<div><Header /><About /><Footer /></div>)} />
          <Route path="/support" element={ (<div> <Header /><Support /><Footer /></div>)} />
          <Route path="/login" element={<Login />} />
        
        <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          
        </Routes>
       
       
          
      

      
    </UserContext>
  );
}

export default App;
