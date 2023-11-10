import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Navbar from './component/Navbar';
import LoanCalculator from './pages/LoanCalculator'; 
import NetSavings from './pages/NetSavings'; 

import Budget from './pages/Budget';
import Investment from './pages/Investment';
import Expenses from './pages/Expenses';
import Home from './component/Home.js';
import Register from './pages/Register.js';
import Harsh from './pages/harsh.js';



function App() {
  
  return (
<Router>
  
      <Routes>
      
        <Route path="/*" element={<><Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/loan" element={<LoanCalculator />} />
          <Route path="/netSavings" element={<><NetSavings /></>} /> 
          <Route path="/investment" element={<><Investment /></>} />
         <Route path="/Budget" element={<><Budget /></>} />
         <Route path="/Expense" element={<><Expenses /></>} />/
       



              </Routes> 
             </>
          }
        />
      </Routes>
    </Router>

    // <BrowserRouter>
    //   {/* {isLoggedIn && <Navbar />} Conditionally render Navbar based on login status */}
    //   <Routes>
    //     {/* <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
    //     <Route path="/" element={<Login />} />
    //     <Route path="/home" element={<><Navbar/><Home /></>} />
    //     <Route path="/loan" element={<><Navbar/><LoanCalculator /></>} />
    //      <Route path="/netSavings" element={<><Navbar/><NetSavings /></>} /> 
    //      <Route path="/investment" element={<><Navbar/><Investment /></>} />
    //      <Route path="/Budget" element={<><Navbar/><Budget /></>} />
    //      <Route path="/Expense" element={<><Navbar/><Expenses /></>} />/
    //     {/* Other routes */}
    //   </Routes>
    // </BrowserRouter>
    //-----------------------------------
    // <Router>
    //   {/* <Navbar /> */}
    //   {/* <Home/> */}
    //  {/* <Login/> */}
    //  {/* <Route path="/loanemi" element={<><Navbar/><LoanEMI /></>} /> */}
    //   <Routes>
    //   <Route path="/" element={<Login/>} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/loan" element={<><Navbar/><LoanCalculator /></>} />
    //     <Route path="/netSavings" element={<><Navbar/><NetSavings /></>} /> 
    //     <Route path="/investment" element={<><Navbar/><Investment /></>} />
    //     <Route path="/Budget" element={<><Navbar/><Budget /></>} />
    //     <Route path="/Expense" element={<><Navbar/><Expenses /></>} />/
    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     {/* <Route path="/user" element={<UserList />} /> */}
    //        </Routes>
    // </Router>
  );
}

export default App;
