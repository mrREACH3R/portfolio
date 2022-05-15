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
import Footer from './components/Footer/footer'
import {themeContext} from './Context'
import { useContext } from 'react';
function App() {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background :darkMode? 'black': '',
      color: darkMode? 'white':''
    }}
    >
     <NavBar/>
     <Intro/>
     <Servise/>
     <Exper/>
     <Works/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
