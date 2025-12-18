import React from 'react'

export default function Alert(props) {

  // Function to capitalize the first letter of the alert type
  const captitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (
    // Keep consistent layout space for alerts
    <div style={{minHeight : '65px'}}>

      {/* Show alert with ARIA live region for screen readers */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show shadow-sm`}
          role="status"
          aria-live="polite"
        >
          <div className="d-flex align-items-start justify-content-between">
            <div>
              <strong>{captitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>

            {/* Optional close control — will call the provided handler if available */}
            {props.onClose ? (
              <button
                type="button"
                className="btn-close ms-3"
                aria-label="Dismiss alert"
                onClick={() => props.onClose()}
              />
            ) : null}
          </div>
        </div>
      )}
    </div>
    
  )
}