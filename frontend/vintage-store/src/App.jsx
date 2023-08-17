
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Sell from './components/Sell';
import Buy from './components/Buy';

import Footer from './components/Footer';
import { UserProvider } from "./UserContext";
import CheckOut from './components/CheckOut';
import UserAuth from './UserAuth';
import BuyPage from './components/BuyPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <UserProvider>
      <Navbar />
      <Routes>
      <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='home' element={<Home></Home>} />
         <Route path="about" element={<About />} /> 
         <Route path="contact" element={<Contact />} /> 
         <Route path="login" element={<Login />} /> 
         <Route path="signup" element={<SignUp />} /> 
         <Route path="sell" element={<UserAuth><Sell /></UserAuth>} /> 
         <Route path="buy" element={<UserAuth><Buy /></UserAuth>} /> 
         <Route path="checkout/:id" element={<CheckOut/>} /> 
         <Route path="buypage/:id" element={<BuyPage/>} /> 
         
      </Routes>
      </UserProvider>
      <Footer/>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
