import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navBar';
import Intro from './components/Intro/intro'
import Servise from './components/Servises/servises';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Servise/>
    </div>
  );
}

export default App;
