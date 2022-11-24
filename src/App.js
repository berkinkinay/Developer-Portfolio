import React, { lazy } from 'react'
import AnimatePages from './components/AnimatePages';
import Lastpart from './components/Lastpart';
import { Route, Routes, useLocation } from 'react-router-dom';
import "./index.css";
import Sidebar from './components/Sidebar';
import { Footer } from './components/Footer';
import Nav from './components/Nav';

const Portfolio = lazy(() => import ("./pages/Portfolio"));
const Aboutmenew = lazy(() => import ("./pages/Aboutmenew"));

const App = () => {
    const location = useLocation();
  return (
   <>
   <AnimatePages />
    <Nav />
    <Sidebar />
     <Routes key={location.pathname} location={location}>
       <Route 
         exact 
         path= '/' element= { <Aboutmenew />} />
       <Route
         exact 
         path= '/Portfolio' element= { <Portfolio /> } />
     </Routes>
    <Footer />
   </>
  );
}
export default App;