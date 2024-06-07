import logo from './logo.svg';
import './App.css';

import "./components/Home"
import "./components/Header"
import "./components/Footer"
import "./components/SideNav"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SideNav from './components/SideNav';
import Login from './components/Login';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Home/>
      <SideNav/>
      <Footer/>
    </div>
  );
}

export default App;
