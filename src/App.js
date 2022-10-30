import Nav from './Components/Navbar';
import './Components/Navbar.css'
import React from 'react';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experiencs';
import Works from './Components/Works/Work'
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testmonials/Testimonial'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';
import {useContext} from 'react';
function App()
{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <div className="App" style={{background:darkMode ? 'black':'',color:darkMode ? 'white':''}}>
      <Nav/>
      <Intro/>
      <Services/>
      <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}



export default App;