import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navBar';
import Intro from './components/Intro/intro'
import Servise from './components/Servises/servises';
import Exper from './components/Experience/experience';
import Works from './components/works/work';
import Portfolio from './components/Portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonials';
import Contact from './components/Contact/contact';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Servise/>
     <Exper/>
     <Works/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
    </div>
  );
}

export default App;
