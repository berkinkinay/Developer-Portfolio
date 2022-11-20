import React, { lazy } from 'react'
import Animatepages from './components/Animatepages';
import Navbar from './components/Navbar';
import Lastpart from './components/Lastpart';
import { Route, Routes, useLocation } from 'react-router-dom';
import "./index.css";
import Sidebar from './components/Sidebar';
import { Yes } from './components/Yes';

const Portfolio = lazy(() => import ("./pages/Portfolio"));
const Aboutmenew = lazy(() => import ("./pages/Aboutmenew"));

const App = () => {
    const location = useLocation();
  return (
   <>
   <Animatepages />
    <Navbar />
    <Sidebar />
     <Routes key={location.pathname} location={location}>
       <Route 
         exact 
         path= '/' element= { <Aboutmenew />} />
       <Route
         exact 
         path= '/Portfolio' element= { <Portfolio /> } />
     </Routes>
   <Yes />
   </>
  );
}
export default App;