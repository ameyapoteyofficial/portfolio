import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works"
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu"
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Education/>
        <Experience/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
