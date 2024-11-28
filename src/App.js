import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [themeText,setThemeText] = useState("Enable Dark mode");
  const [theme,setTheme] = useState("light");
  const [alert,setAlert] = useState(null);
  

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const changeTheme = ()=>{
    console.log("changeTheme called....")
    if(theme === "light"){
      console.log("dark mode called")
      setTheme("dark")
      setThemeText("Enable Light mode ")
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
    }else{
      console.log("light mode called")
      setTheme("light")
      setThemeText("Enable Dark mode")
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="Text Utils" style={theme} theme={themeText} clickTheme={changeTheme}/>
        <Alert alert={alert}/>
        <TextForm style={theme}/>
        {/* <Routes>
          <Route exact path="/textform" element={<TextForm style={theme}/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
