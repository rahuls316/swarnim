import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from './Components/Overview';
import Location from './Components/Location';
import Enquiry from './Components/Enquiry';
import Footer from './Components/Footer';
import FloorPlane from './Components/FloorPlans';
import Ecosystem from './Components/Ecosystem';
import Header from './Components/Header';
import Home from './Components/Home';

// import Header from './Components/Header';

const App = () => {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={""} />
            <Route path='/code' element={<div>Code</div>} />
            <Route path='/html-&-css' element={<div>HTML & CSS</div>} />
            <Route path='/javascript' element={<div>JavaScript</div>} />
            <Route path='/contact-us' element={<div>Contact Us</div>} />
        </Routes>
    </Router>
    <Home/>
    <Overview/>
    <Location/>
    <Ecosystem/>
    <FloorPlane/>
    <Enquiry/>
    <Footer/>
    
    
    </>
  )
}
export default App;