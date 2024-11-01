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

  const handleClearClick = () => {
    const newText = "";
    setText(newText);
  }

  // Declare a state variable 'text' and a function 'setText' to update it
  const [text, setText] = useState('');                    
  return (
    <>
    <div className='container'>
      <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        {/* mx-3 is used for vertical margins(left and right). It is a bootstrap class  */}
        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>

        
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>PREVIEW</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
