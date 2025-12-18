// //Concept of props and how to use props
// import React from 'react'
// //import PropTypes from 'prop-types'              // Uncomment if using PropTypes for type-checking props


// // Importing Link from react-router-dom for navigation without page reloads
// import { Link } from 'react-router-dom'

// // Navbar component receives `mode` and `toggleMode` props to control appearance and theme-switch functionality
// export default function Navbar(props) {               
//   return (
//     <>
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>           
//     <div className="container-fluid">
//         <a className="navbar-brand" href="/">TextChanger</a>             {/*if href="#" is given then then change it to href="/" */}
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ">
//                 <li className="nav-item">
//                     {/* Linking to the Home page with reacter-router-dom*/}
//                     {/* The Link component from react-router-dom replaces traditional <a> tags and href to 'to=' for client-side navigation. Use to="/" for the home page and to="/about" for the About page. */}
//                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                     {/* Linking to the About page with reacter-router-dom*/}
//                     <Link className="nav-link" to="/about">About</Link>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="/">Services</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="/">Contact</a>
//                 </li>
//             </ul>
//         </div>
//       <div className={`form-check form-switch text-${props.mode==="light" ? "dark" : "light"}`}>   {/*Here variable color is set according to the mode */}
//         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
//       </div>
//     </div>
// </nav>
//   </>
//   )
// }

// //PropTypes
// // Navbar.propTypes = {
// //     firstIcon: PropTypes.string.isRequired,               //if we don't pass the value in App.js file for firstIcon then it will show error (this is the concept of isRequired)
// //     thirdIcon: PropTypes.string,                           //string means we have to pass string values only 
// // }

// // Navbar.defaultProps = {                                  //These are default values if we don't pass any value in App.js file for default
// //     firstIcon: 'Set firstIcon name here', 
// //     thirdIcon: 'Contact'
// // }





import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
// icons (Heroicons library installed)
import { HomeIcon, InformationCircleIcon, Cog6ToothIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Navbar(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg shadow-sm`}
        style={{
          padding: '0.8rem 1.5rem',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="container-fluid">
          {/* Brand name styled with a modern font and color */}
          <Link
            to="/"
            className="navbar-brand fw-bold d-flex align-items-center"
            onClick={() => setExpanded(false)}
            style={{ fontSize: '1.4rem' }}
            aria-label="TextChanger home"
          >
            {/* small inline SVG mark */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 8 }}
              aria-hidden="true"
            >
              <rect x="1" y="1" width="22" height="22" rx="5" className="brand-mark" />
              <path d="M7 12h10M7 8h6M7 16h10" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>TextChanger</span>
          </Link>

          {/* Toggler for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-controls="navbarNav"
            aria-expanded={expanded}
            aria-label={expanded ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navigation links */}
          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  onClick={() => setExpanded(false)}
                  className={({ isActive }) => `nav-link d-flex align-items-center nav-item-with-tooltip ${isActive ? 'active' : ''}`}
                  style={{ fontWeight: '500', transition: 'color 0.12s ease' }}
                  title="Home"
                >
                  <span className="icon-wrapper me-2" tabIndex={0} aria-hidden="false" role="img" aria-label="Home icon">
                    <HomeIcon className="nav-icon" aria-hidden="true" />
                    <span className="tooltip">Home</span>
                  </span>
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  onClick={() => setExpanded(false)}
                  className={({ isActive }) => `nav-link d-flex align-items-center nav-item-with-tooltip ${isActive ? 'active' : ''}`}
                  style={{ fontWeight: '500', transition: 'color 0.12s ease' }}
                  title="About"
                >
                  <span className="icon-wrapper me-2" tabIndex={0} aria-hidden="false" role="img" aria-label="About icon">
                    <InformationCircleIcon className="nav-icon" aria-hidden="true" />
                    <span className="tooltip">About</span>
                  </span>
                  <span>About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  onClick={() => setExpanded(false)}
                  className={({ isActive }) => `nav-link d-flex align-items-center nav-item-with-tooltip ${isActive ? 'active' : ''}`}
                  style={{ fontWeight: '500', transition: 'color 0.12s ease' }}
                  title="Services"
                >
                  <span className="icon-wrapper me-2" tabIndex={0} aria-hidden="false" role="img" aria-label="Services icon">
                    <Cog6ToothIcon className="nav-icon" aria-hidden="true" />
                    <span className="tooltip">Services</span>
                  </span>
                  <span>Services</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  onClick={() => setExpanded(false)}
                  className={({ isActive }) => `nav-link d-flex align-items-center nav-item-with-tooltip ${isActive ? 'active' : ''}`}
                  style={{ fontWeight: '500', transition: 'color 0.12s ease' }}
                  title="Contact"
                >
                  <span className="icon-wrapper me-2" tabIndex={0} aria-hidden="false" role="img" aria-label="Contact icon">
                    <EnvelopeIcon className="nav-icon" aria-hidden="true" />
                    <span className="tooltip">Contact</span>
                  </span>
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Theme switcher */}
          <div className="ms-3" role="group" aria-label="Theme controls">
            <ThemeToggle />
          </div>
          {/* Primary CTA — visible on medium+ screens, tucked into mobile menu on small */}
          <Link
            to="/"
            onClick={() => setExpanded(false)}
            className="btn btn-sm btn-primary ms-3 d-none d-md-inline-flex align-items-center"
            aria-label="Try TextChanger"
          >
            Try now
          </Link>
        </div>
      </nav>
    </>
  );
}
