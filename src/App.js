import React, { useState } from 'react';

// import Header from "./components/Header/header.js";
// import Intro from "./components/Intro/intro.js";
// import Footer from "./components/Footer/footer.js";
// import trees from "./assets/images/TreesBG.jpg"
// import About from "./pages/About/about.js";
// import Contact from "./pages/Contact/contact.js";
// import Projects from "./pages/Projects/projects.js";

import "./App.css"
function App() {
  // const [currentCategory, setCurrentCategory] = useState("About");
    const [currentCategory, setCurrentCategory] = useState("Intro");
  
  const pageSelect = () =>{
    if(currentCategory === "Intro"){
      return <Intro></Intro>
    }
    if(currentCategory === "About"){
      return <About></About>
    }
    if(currentCategory === "Contact"){
      return <Contact></Contact>
    }
    if(currentCategory === "Projects"){
      return <Projects></Projects>
    }
  }
  const noDispSwitch = () =>{
    if(currentCategory === "Intro"){
        return "noDisp"
    } else {
        return "_"
    }
  }


  return (
    <div className="chapterSize">
      <div id="heroBack">
        <img className="chapterSize" src={trees}/>
      </div>
      <Header
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        { pageSelect()}
      </main>
      <Footer></Footer>
      <a className={noDispSwitch()} id="returnBut" href="">Home</a>
    </div>
  );
}

export default App;