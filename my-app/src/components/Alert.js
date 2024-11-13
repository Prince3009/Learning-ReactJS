import React from 'react'

export default function Alert(props) {

  // Function to capitalize the first letter of the alert type
  const captitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (
    // Container div with fixed height to maintain layout consistency
    <div style={{height : '65px'}}>       

    {/* Conditional rendering: display alert only if props.alert is not null */}
    { props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{captitalize(props.alert.type)}</strong>: {props.alert.msg}

        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
      </div>
    
  )
}