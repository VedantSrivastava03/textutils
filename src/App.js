// import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import "./App.css";
import React, { useState } from 'react'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#122f5a';
    showAlert("Dark mode has been enabled","success")
  }
  
    else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled","success")
    
  }
  
  }
  return (
    <>
    <Router>
    
    <Navbar title = "Textutils" mode={mode} toggleMode={toggleMode} aboutText = "About us"/>
    <Alert alert={alert}/>
    <div className="container my-5">
      <Routes>
        
        <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below: " mode={mode}/>}/>

        <Route exact path="/about"  element={<About mode={mode}/>}/>
         
         
       
        
      </Routes>
      </div>
    </Router>


     {/* <Alert alert={alert}/>
    <Navbar title = "Textutils" mode={mode} toggleMode={toggleMode} aboutText = "About us"/>
    <div className="container my-5">
    <Textform showAlert={showAlert} heading="Enter the text to analyze below: " mode={mode}/>
    <About/>
    </div> */}
    
    
    </>
  );
}

export default App;
