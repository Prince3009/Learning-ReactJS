import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {                //using props concept
  return (
    <>
    <nav>
    <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{
    '--bs-nav-link-color': 'var(--bs-white)',
    '--bs-nav-pills-link-active-color': 'var(--bs-primary)',
    '--bs-nav-pills-link-active-bg': 'var(--bs-white)',
    }}>
    <li className="nav-item" role="presentation">
    <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">{props.firstIcon}</button>      
       
    </li>
    <li className="nav-item" role="presentation">
    <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
    </li>
    <li className="nav-item" role="presentation">
    <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">{props.thirdIcon}</button>
  </li>
  </ul>
  </nav>
  </>
  )
}

//PropTypes
Navbar.propTypes = {
    firstIcon: PropTypes.string.isRequired,               //if we don't pass the value in App.js file for firstIcon then it will show error (this is the concept of isRequired)
    thirdIcon: PropTypes.string,                           //string means we have to pass string values only 
}

Navbar.defaultProps = {                                  //These are default values if we don't pass any value in App.js file for default
    firstIcon: 'Set firstIcon name here', 
    thirdIcon: 'Contact'
}