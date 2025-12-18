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
import { ArrowUpIcon, ArrowDownIcon, TrashIcon, SparklesIcon, ArrowPathIcon, DocumentDuplicateIcon, HashtagIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

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

  // const handleSpaces = () => {
  //   setText(text.replace(/\s+/g, ' ').trim());
  //   props.showAlert('Extra spaces removed', 'success');
  // };

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
  const trimmedText = text.trim();
  const isEmpty = trimmedText.length === 0;

  return (
    <>
      <div className="container">
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control text-input"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter your text here..."
            aria-label="Text input area"
          ></textarea>
        </div>

        {/* Toolbar: group actions and improve affordance */}
        <div className="toolbar d-flex flex-wrap align-items-center mb-3">
          <button
            className="btn btn-primary btn-action nav-item-with-tooltip"
            onClick={handleUppercaseClick}
            disabled={isEmpty}
            title="Convert all text to UPPERCASE"
            aria-disabled={isEmpty}
            aria-label="Convert to uppercase"
          >
            <span className="icon-wrapper" tabIndex={0} aria-hidden="false" role="img" aria-label="Uppercase">
              <ArrowUpIcon className="nav-icon" aria-hidden="true" />
              <span className="tooltip">Uppercase</span>
            </span>
            <span className="btn-text ms-2">UPPER</span>
          </button>

          <button
            className="btn btn-danger btn-action nav-item-with-tooltip"
            onClick={handleClearClick}
            disabled={isEmpty}
            title="Remove all text"
            aria-disabled={isEmpty}
            aria-label="Clear text"
          >
            <span className="icon-wrapper" tabIndex={0} aria-hidden="false" role="img" aria-label="Clear">
              <TrashIcon className="nav-icon" aria-hidden="true" />
              <span className="tooltip">Clear</span>
            </span>
            <span className="btn-text ms-2">Clear</span>
          </button>

          <button
            className="btn btn-outline-primary btn-action nav-item-with-tooltip"
            onClick={handleLowercaseClick}
            disabled={isEmpty}
            title="Convert all text to lowercase"
            aria-disabled={isEmpty}
            aria-label="Convert to lowercase"
          >
            <span className="icon-wrapper" tabIndex={0} aria-hidden="false" role="img" aria-label="Lowercase">
              <ArrowDownIcon className="nav-icon" aria-hidden="true" />
              <span className="tooltip">Lowercase</span>
            </span>
            <span className="btn-text ms-2">lower</span>
          </button>

          <button
            className="btn btn-outline-secondary btn-action nav-item-with-tooltip"
            onClick={handleCapitalizeWords}
            disabled={isEmpty}
            title="Capitalize each word"
            aria-disabled={isEmpty}
            aria-label="Capitalize each word"
          >
            <span className="icon-wrapper" tabIndex={0} aria-hidden="false" role="img" aria-label="Capitalize">
              <SparklesIcon className="nav-icon" aria-hidden="true" />
              <span className="tooltip">Capitalize</span>
            </span>
            <span className="btn-text ms-2">Capitalize</span>
          </button>

          <button
            className="btn btn-outline-secondary btn-action nav-item-with-tooltip"
            onClick={handleReverseText}
            disabled={isEmpty}
            title="Reverse the text characters"
            aria-disabled={isEmpty}
            aria-label="Reverse text"
          >
            <span className="icon-wrapper" tabIndex={0} aria-hidden="false" role="img" aria-label="Reverse">
              <ArrowPathIcon className="nav-icon" aria-hidden="true" />
              <span className="tooltip">Reverse</span>
            </span>
            <span className="btn-text ms-2">Reverse</span>
          </button>

          <button
            className="btn btn-success btn-action nav-item-with-tooltip"
            onClick={handleCopyText}
            disabled={isEmpty}
            title="Copy text to clipboard"
            aria-disabled={isEmpty}
            aria-label="Copy to clipboard"
          >
            <span className="icon-wrapper" tabIndex={0} aria-hidden="false" role="img" aria-label="Copy">
              <DocumentDuplicateIcon className="nav-icon" aria-hidden="true" />
              <span className="tooltip">Copy</span>
            </span>
            <span className="btn-text ms-2">Copy</span>
          </button>

          <button
            className="btn btn-outline-danger btn-action nav-item-with-tooltip"
            onClick={handleRemoveNumbers}
            disabled={isEmpty}
            title="Remove all numeric characters"
            aria-disabled={isEmpty}
            aria-label="Remove numbers"
          >
            <span className="icon-wrapper" tabIndex={0} aria-hidden="false" role="img" aria-label="Remove numbers">
              <HashtagIcon className="nav-icon" aria-hidden="true" />
              <span className="tooltip">Remove numbers</span>
            </span>
            <span className="btn-text ms-2">Remove numbers</span>
          </button>

          <button
            className="btn btn-outline-warning btn-action nav-item-with-tooltip"
            onClick={handleReplaceWord}
            disabled={isEmpty}
            title="Find and replace a word"
            aria-disabled={isEmpty}
            aria-label="Replace word"
          >
            <span className="icon-wrapper" tabIndex={0} aria-hidden="false" role="img" aria-label="Replace">
              <ArrowsRightLeftIcon className="nav-icon" aria-hidden="true" />
              <span className="tooltip">Replace</span>
            </span>
            <span className="btn-text ms-2">Replace</span>
          </button>

          <div className="ms-auto d-flex align-items-center small text-muted info-panel" aria-hidden="false">
            <span className="me-3">{text.split(/\s+/).filter(e => e.length !== 0).length} words</span>
            <span>{text.length} chars</span>
          </div>
        </div>
        {/* removed duplicated second-row buttons - toolbar contains all actions now */}
      </div>
      <div className="container my-3">
        <h2 className="mb-2">Your text summary</h2>
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 justify-content-between">
          <div>
            <p className="mb-1"><strong>{text.split(/\s+/).filter((element) => element.length !== 0).length}</strong> words • <strong>{text.length}</strong> characters</p>
            <p className="text-muted small mb-0">Estimated read time: <strong>{(0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)}</strong> minutes</p>
          </div>
          <div className="w-100 w-md-50 mt-2 mt-md-0">
            <div className="progress rounded-pill" style={{height: '10px'}} aria-hidden="true">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{width: `${Math.min(100, text.length / 5)}%`}}
                aria-valuenow={text.length}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
        <h2 className="mt-3">Preview</h2>
        <div className="preview p-3 rounded" aria-live="polite">
          <p className="mb-0">{text.length > 0 ? text : 'Nothing to preview — start typing above ✍️'}</p>
        </div>
      </div>
    </>
  );
}