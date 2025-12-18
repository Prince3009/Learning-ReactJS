import './App.css';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

//React-router - React is a JavaScript library developed by Facebook for building interactive and efficient user interfaces, especially single-page applications. It enables developers to create reusable UI components and efficiently manage the application's state (data) to update only the necessary parts of the interface when something changes, enhancing performance and user experience.
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
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

  return (
  <>
  <Router>
  <Navbar />

  <Alert alert={alert} onClose={() => setAlert(null)} />

  <div className="container">  
  <Routes>
    <Route path="/" element={<TextForm heading="Enter your text below" showAlert={showAlert}/> } />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={ <About /> } />
    <Route path="/contact" element={<Contact />} />
  </Routes>  
  </div>
  </Router>
  </>
  );
}

export default App;