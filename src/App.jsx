import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about-us' exact element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;


// export default App;
//   return (
//     <Router>
//       <div className='App'>
//         <Navbar />

//         <Routes>
//           <Route path='/' element={<HeroSection />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
