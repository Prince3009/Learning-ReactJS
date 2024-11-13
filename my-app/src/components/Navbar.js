//Concept of props and how to use props
import React from 'react'
//import PropTypes from 'prop-types'              // Uncomment if using PropTypes for type-checking props


// Importing Link from react-router-dom for navigation without page reloads
import { Link } from 'react-router-dom'

// Navbar component receives `mode` and `toggleMode` props to control appearance and theme-switch functionality
export default function Navbar(props) {               
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>           
    <div className="container-fluid">
        <a className="navbar-brand" href="/">TextChanger</a>             {/*if href="#" is given then then change it to href="/" */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    {/* Linking to the Home page with reacter-router-dom*/}
                    {/* The Link component from react-router-dom replaces traditional <a> tags and href to 'to=' for client-side navigation. Use to="/" for the home page and to="/about" for the About page. */}
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    {/* Linking to the About page with reacter-router-dom*/}
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                </li>
            </ul>
        </div>
      <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"}`}>   {/*Here variable color is set according to the mode */}
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
    </div>
</nav>
  </>
  )
}

//PropTypes
// Navbar.propTypes = {
//     firstIcon: PropTypes.string.isRequired,               //if we don't pass the value in App.js file for firstIcon then it will show error (this is the concept of isRequired)
//     thirdIcon: PropTypes.string,                           //string means we have to pass string values only 
// }

// Navbar.defaultProps = {                                  //These are default values if we don't pass any value in App.js file for default
//     firstIcon: 'Set firstIcon name here', 
//     thirdIcon: 'Contact'
// }