// Css
import './app.css';
//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../src/pages/Home'
import Description from '../src/pages/Description'
//Router
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <main className="main_content">
            <Routes>
              <Route path="Movie-app/" element={<Home />} > </Route>
              <Route path="Movie-app/description/:season/:episode" element={<Description />} > </Route>
            </Routes>
          </main>
          <Footer/>
        </Router>
      </div>
  );
}
export default App;
