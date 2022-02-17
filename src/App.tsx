import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../src/pages/Home'
import Description from '../src/pages/Description'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} > </Route>
            <Route path="/description" element={<Description />} > </Route>
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;
