//Concept of useState, how to handle events and how to set state
//useState declares a state variable that you can update directly
import React, {useState} from 'react'

export default function TextForm(props) {

  // Function to handle changes in the textarea
  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  }

  const handleUppercaseClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowercaseClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  }

  // Declare a state variable 'text' and a function 'setText' to update it
  const [text, setText] = useState('Enter your text here');                    
  return (
    <div>
      <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        {/* mx-3 is used for vertical margins(left and right). It is a bootstrap class  */}
        <button className="btn btn-primary mx-3" onClick={handleUppercaseClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-3" onClick={handleLowercaseClick}>Convert to lowercase</button>
    </div>
  )
}
