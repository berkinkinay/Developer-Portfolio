import Animatepages from './components/Animatepages';
import Navbar from './components/Navbar';
import Lastpart from './components/Lastpart';
import Aboutme from './pages/Aboutme';
import Porfolio from './pages/Portfolio';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import "./index.css";
import Sidebar from './components/Sidebar';
import Moreinfo from './components/Moreinfo';

const App = () => {
  const location = useLocation();
  return (
  <div>
   <AnimatePresence initial={true}>   
    <Animatepages />
     <Navbar />
     <Sidebar />
       <Routes key={location.pathname} location={location}>
        <Route 
          exact 
          path= '/' element= { <Aboutme />} />
        <Route
          exact 
          path= '/Portfolio' element= { <Porfolio /> } />
       </Routes>
      <Lastpart />
   </AnimatePresence>
  </div>
  );
}

export default App;   