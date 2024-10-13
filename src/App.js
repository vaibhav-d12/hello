import Navbar from './component/Navbar';
import './App.css';
import TextForm from './component/TextForm';
import About from './component/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("dark"); //whether the dark mode is enabled or not.
  const toggleMode = () => {
    if(Mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    
    }
    else{
      setMode("light");
          document.body.style.backgroundColor = "white";}
        }

    
  
  return (
    <>
    
    <Router>
    <Navbar title = "TextUtils" Mode={Mode} toggleMode={toggleMode} AboutUs = " About Page"/>
           <Switch>
          <Route path="/About">
            <About />
            </Route>
          <Route path="/">
          <TextForm heading ="Enter  the text to analyze"/>
          </Route>
        </Switch>
    </Router>
     
      {/* <About/> */}
           
    
      {/* <RouterProvider router={router} /> */}

    </>
    
  );
}

export default App;
