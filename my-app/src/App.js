import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';

//React-router - React is a JavaScript library developed by Facebook for building interactive and efficient user interfaces, especially single-page applications. It enables developers to create reusable UI components and efficiently manage the application's state (data) to update only the necessary parts of the interface when something changes, enhancing performance and user experience.
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  // State to manage the theme mode, default is 'light' mode
  const [mode, setMode] = useState('light');

  // State to manage alert messages
  const [alert, setAlert] = useState(null);

  // Function to display an alert with a message and type
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type 
    })
  //Hide the alert message after 1.5 seconds
  setTimeout(() => {
    setAlert(null)
  }, 1500)}

  // Function to toggle between light and dark modes
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', "success");    //message, type
      //document.title = 'TextChanger - DarkMode';             //When dark mode enabled then the title of the page changes to 'TextChanger - DarkMode'
      
      //When dark mode is enabled then below titles will appear every 2 and 1.5 seconds respectively
      /* 
      setInterval(() => {
        document.title = "Install text utils now";
      }, 2000);

      setInterval(() => {
        document.title = "TextChanger is Amazing";
      }, 1500); 
      */
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', "success");
    }
  }

  return (
  <>
  <Router>
  {/* <Navbar firstIcon="Home" thirdIcon="About" />     */}
  <Navbar mode={mode} toggleMode={toggleMode}/>

  <Alert alert={alert} />

  <div className="container">  
  <Routes>
    <Route path="/" element={<TextForm heading="Enter your text below" showAlert={showAlert}/> } />
    <Route path="/about" element={ <About/> } />
  </Routes>  
  </div>
  </Router>
  </>
  );
}

export default App;