// //Concept of useState, how to handle events and how to set state
// //useState declares a state variable that you can update directly
// import React, {useState} from 'react'

// export default function TextForm(props) {

//   // Function to handle changes in the textarea
//   const handleOnChange = (event) => {
//     const newText = event.target.value;
//     setText(newText);
//   }

//   const handleUppercaseClick = () => {
//     const newText = text.toUpperCase();
//     setText(newText);
//     props.showAlert("Converted to uppercase", "success");   //Show alert after text converted to uppercase
//   }

//   const handleLowercaseClick = () => {
//     const newText = text.toLowerCase();
//     setText(newText);
//     props.showAlert("Converted to lowercase", "success");
//   }

//   const handleClearClick = () => {
//     const newText = "";
//     setText(newText);
//     props.showAlert("Cleared", "success");         
//   }

//   //Using regex pattern
//   const handleSpaces = () => {
//     const newText = text.replace(/\s+/g, " ");
//     setText(newText);
//     props.showAlert("Spaces removed", "success");

//   }
//   // Declare a state variable 'text' and a function 'setText' to update it
//   const [text, setText] = useState('');                    
//   return (
//     <>
//     <div className='container'>
//       <h1 className='mb-4'>{props.heading}</h1>
//         <div className="mb-3"> 
//         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//         </div>
//         {/* mx-3 is used for vertical margins(left and right). It is a bootstrap class  */}
//         <button className="btn btn-primary mx-2 my-2" onClick={handleUppercaseClick}>Convert to UPPERCASE</button>
//         <button className="btn btn-primary mx-2 my-2" onClick={handleLowercaseClick}>Convert to lowercase</button>
//         <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
//         <button className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove extra spaces</button>

        
//     </div>
//     <div className="container my-3">
//       <h1>Your text summary</h1>
//       {/* filter((element) => { return element.length !== 0 }) checks each word's length.
//       Only words with length !== 0 are kept, ensuring no empty strings are counted as words. */}
//       <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>   
//       <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read</p>
//       <h2>PREVIEW</h2>
//       <p>{text}</p>
//     </div>
//     </>
//   )
// }








import React, { useState } from 'react';

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase', 'success');
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared', 'success');
  };

  const handleSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert('Extra spaces removed', 'success');
  };

  const handleReverseText = () => {
    setText(text.split('').reverse().join(''));
    props.showAlert('Text reversed', 'success');
  };

  const handleCapitalizeWords = () => {
    const newText = text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setText(newText);
    props.showAlert('Capitalized each word', 'success');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard', 'success');
  };

  const handleRemoveNumbers = () => {
    setText(text.replace(/[0-9]/g, ''));
    props.showAlert('Numbers removed', 'success');
  };

  const handleReplaceWord = () => {
    const wordToReplace = prompt('Enter the word you want to replace:');
    const replacementWord = prompt(`Enter the replacement for "${wordToReplace}":`);
    if (wordToReplace && replacementWord) {
      const newText = text.replaceAll(wordToReplace, replacementWord);
      setText(newText);
      props.showAlert(`Replaced "${wordToReplace}" with "${replacementWord}"`, 'success');
    }
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your text here..."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUppercaseClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowercaseClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear text
        </button>
        {/* <button className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>
          Remove extra spaces
        </button> */}
        <button className="btn btn-primary mx-2 my-2" onClick={handleReverseText}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeWords}>
          Capitalize Words
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveNumbers}>
          Remove Numbers
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleReplaceWord}>
          Replace Word
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').filter((element) => element.length !== 0).length} words and{' '}
          {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(' ').filter((element) => element.length !== 0).length}{' '}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}


