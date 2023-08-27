import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './WebPages/HomePage'
import Footer from './Components/Footer';
import Menu from './WebPages/MenuPage';
import About from './WebPages/About';
import Contact from './WebPages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
         <Route path='/' exact Component = {Home}/>
         <Route path='Menu' exact Component = {Menu}/>
         <Route path ='About' element = {<About/>}/>
         <Route path = 'Contact' element = {<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
