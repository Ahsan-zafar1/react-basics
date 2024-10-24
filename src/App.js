
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import { Routes, Route, Link } from 'react-router-dom'; 
// import Home from './Home';
// import About from './About';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  //Show alert function

  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    });
     // Clear the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
 
  // Dark Mode function
  const toggleMode = () => {
    if (mode === 'light' || mode === 'blue') {
      setMode('dark');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      showAlert("Dark mode has been enabled", "success");
     
    }
    else {
      setMode('light')
      document.documentElement.setAttribute('data-bs-theme', 'light');
      showAlert("Dark mode has been Disabled", "success");
     

    }
  }
   // Blue mode function
   const blueToggle = () => {
    if (mode === 'light' || mode === 'dark') {
      setMode('blue');
      document.documentElement.setAttribute('data-bs-theme', 'blue');
      showAlert("Blue mode has been enabled", "success");

    } else {
      setMode('light');
      document.documentElement.setAttribute('data-bs-theme', 'light');
      showAlert("Blue mode has been disabled", "success");

      // Revert back to light theme styles
      // document.body.style.backgroundColor = '#ffffff';
      // document.body.style.color = '#000000'; 
    }
  };
  return (
    <>
    
    <Navbar title='TextUtils' aboutText='About' mode = {mode} toggleMode = {toggleMode} blueToggle= {blueToggle} />
    <Alert alert= {alert} />
    <Routes>  {/* Import Routes */}
        <Route path="/home" element={<TextForm heading="Enter the text" mode = {mode} showAlert = {showAlert}></TextForm>} />  {/* Import Route */}
        <Route path="/about" element={<About />} />
      </Routes>
     {/* <TextForm heading="Enter the text" mode = {mode} showAlert = {showAlert}></TextForm> */}
     {/* <About></About> */}
    </>
  );
}

export default App;


