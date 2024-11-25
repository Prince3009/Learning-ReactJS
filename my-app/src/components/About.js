// //Using mutiple states
// // import React, {useState} from 'react'

// export default function About(props) {

//     // State for the styling of the component, starting with light mode colors
//     //const [myStyle, setMyStyle] = useState({
//   //     color: 'black',
//   //     backgroundColor: 'white'
//   // });

//   let myStyle = {
//     color: props.mode === 'dark' ? 'white': '#042743',
//     backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
//   }
//   // State for the button text, starting with "Enable Dark Mode"
//   // const [btnText, setBtnText] = useState('Enable Dark Mode');

//   // Function to toggle between Dark Mode and Light Mode
//   /* const toggleMode = () => {
//     if(myStyle.color === 'black') {
//       setMyStyle({
//         color: 'white',
//         backgroundColor: 'black',
//         border: '1px solid white'
//       })
//       setBtnText('Enable Light Mode');
//     }
//     else {
//       setMyStyle({
//         color: 'black',
//         backgroundColor: 'white'
//       })
//       setBtnText('Enable Dark Mode');
//     }
//   }
//     */
//   return (
//     <div className='container m-2' style={myStyle}>
//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item" style={myStyle}>
//             <h2 className="accordion-header">
//             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
//                 Accordion Item #1
//             </button>
//             </h2>
//             <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//             <div className="accordion-body" >
//                 <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to myStyle each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//             </div>
//             </div>
//         </div>
//         <div className="accordion-item" style={myStyle}>
//             <h2 className="accordion-header">
//             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
//                 Accordion Item #2
//             </button>
//             </h2>
//             <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
//                 <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to myStyle each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//             </div>
//             </div>
//         </div>
//         <div className="accordion-item" style={myStyle}>
//             <h2 className="accordion-header">
//             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
//                 Accordion Item #3
//             </button>
//             </h2>
//             <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
//                 <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to myStyle each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className='container my-3'>
//         <button className="btn btn-primary" onClick={toggleMode}>{btnText}</button>
//       </div> */}
//     </div>
//   )
// }


import React, { useState } from 'react';

export default function About(props) {
  // Dynamic styling based on the mode
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    border: props.mode === 'dark' ? '1px solid white' : '1px solid #ccc',
  };

  // State for comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="container my-4 p-4 rounded" style={myStyle}>
      <h2 className="text-center mb-4">About Text Changer</h2>
      <div className="accordion" id="accordionExample">
        {/* Uppercase Conversion */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Convert Text to Uppercase
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Convert your text to uppercase with a single click!</strong>
              This feature is perfect for making your text stand out or adhering
              to formatting rules. Simply type or paste your text and let our
              tool do the rest.
            </div>
          </div>
        </div>

        {/* Lowercase Conversion */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Convert Text to Lowercase
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Transform your text to lowercase effortlessly.</strong>
              This feature is ideal for maintaining consistency in text formatting,
              especially for emails or informal documents.
            </div>
          </div>
        </div>

        {/* Clear Text */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Clear Text
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Clear all text in an instant.</strong> With one click, you can
              remove all content from the input field, making it easy to start fresh
              without manual deletion.
            </div>
          </div>
        </div>

        {/* Remove Extra Spaces */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={myStyle}
            >
              Remove Extra Spaces
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Eliminate unnecessary spaces from your text.</strong> This feature
              is useful for cleaning up copied content or ensuring uniform spacing in
              your document.
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="comments-section mt-4">
        <h3 className="text-center">Comments</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{
              backgroundColor: props.mode === 'dark' ? '#0f2a45' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
              border: props.mode === 'dark' ? '1px solid white' : '1px solid #ccc',
            }}
          ></textarea>
          <button
            className="btn btn-primary mt-2"
            onClick={handleAddComment}
            disabled={newComment.trim() === ''}
          >
            Add Comment
          </button>
        </div>
        <div>
          {comments.length > 0 ? (
            <ul className="list-group">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  style={{
                    backgroundColor: props.mode === 'dark' ? '#0f2a45' : 'white',
                    color: props.mode === 'dark' ? 'white' : '#042743',
                    border: props.mode === 'dark' ? '1px solid white' : '1px solid #ccc',
                  }}
                >
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
}

