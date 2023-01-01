import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from '../assets/images/admin-logo.jpg'; 
import home from '../assets/images/icons/home.jpg';
import aboutus from '../assets/images/icons/aboutus.jpg';
import emailvalidation from '../assets/images/icons/emailvalidation.jpg';
import login from '../assets/images/icons/login.jpg';
import signup from '../assets/images/icons/signup.jpg';
import logout from '../assets/images/icons/logout.jpg';

import Home from './Home';
import About from './About';
import Emailvalidation from './Emailvalidation';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Dashboard from './Dashboard';

 function Navbar() {
  return (
    <BrowserRouter> 
    <div className="admin-header">
      <div className="admin-logo">
        <img src={logo} alt="eshop" />
      </div>        
      <div className="admin-links">
        <div className="flex-container">        
          <div><Link to="/Home"><img src={home} alt="eshop" /></Link></div>
          <div><Link to="/About "><img src={aboutus} alt="eshop" /></Link></div>
          <div><Link to="/Emailvalidation "><img src={emailvalidation} alt="eshop" /></Link></div>
          <div><Link to="/Login "><img src={login} alt="eshop" /></Link></div>
          <div><Link to="/Register "><img src={signup} alt="eshop" /></Link></div>
          <div><Link to="/Logout "><img src={logout} alt="eshop" /></Link></div>                    
        </div>
      </div>      
    </div>
    <Routes>              
      <Route path="/Home" element={<Home />}  />
      <Route path="/About" element={<About />}  />
      <Route path="/Emailvalidation" element={<Emailvalidation />}  />
      <Route path="/Login" element={<Login />}  />
      <Route path="/Register" element={<Register />}  />
      <Route path="/Logout" element={<Logout />}  /> 
      <Route path="/Dashboard" element={<Dashboard />}  />     
    </Routes>
    </BrowserRouter>
    
    
  );
}
export default Navbar