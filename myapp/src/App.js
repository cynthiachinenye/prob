import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './WebPages/HomePage'
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
