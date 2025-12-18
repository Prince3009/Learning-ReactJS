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


import React from 'react';

export default function About() {
  return (
    <div className="container my-1">
      <header className="about-hero p-4 rounded surface">
        <h1 className="display-6 mb-2">About This App</h1>
        <p className="lead text-secondary mb-0">Text Changer is a small, friendly web app built to help you quickly manipulate and format text directly in your browser — no account or signup required.</p>
      </header>

      <section className="mt-4 p-3 surface rounded">
        <h2 className="h5">What this app does</h2>
        <p className="text-secondary">It lets you transform any text in a few clicks: change case, remove extra spaces, reverse text, count words and characters, copy results, and more. Everything runs in your browser so your text stays private.</p>
      </section>

      <section className="mt-4 p-3 surface rounded">
        <h3 className="h6 mb-2">Motivation</h3>
        <ul>
          <li>Built to practice frontend development — a small project to learn React, styling, and UX.</li>
          <li>Helps users quickly manipulate and format text for documents, social posts, and coding examples.</li>
        </ul>
      </section>

      <section className="mt-4 p-3 surface rounded">
        <h3 className="h6 mb-2">Technologies used</h3>
        <p className="text-secondary mb-0">This app uses modern frontend tools: <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and plain <strong>JavaScript</strong>.</p>
      </section>

      <section className="mt-4 p-3 surface rounded">
        <h3 className="h6 mb-2">Features summary</h3>
        <ul className="features-summary">
          <li>Uppercase</li>
          <li>Lowercase</li>
          <li>Capitalize Each Word</li>
          <li>Sentence Case</li>
          <li>Reverse text</li>
          <li>Remove extra spaces</li>
          <li>Word count &amp; character count</li>
          <li>Copy to clipboard</li>
        </ul>
      </section>

      <section className="mt-4 p-3 surface rounded">
        <h3 className="h6 mb-2">About the developer</h3>
        <p className="text-secondary mb-0">I'm a beginner frontend developer learning HTML, CSS, JavaScript and React. I enjoy building small useful tools that solve everyday problems and help me learn by doing.</p>
      </section>

      <section className="mt-4 p-3 surface rounded">
        <h3 className="h6 mb-2">Future plans</h3>
        <ul>
          <li>Add a persistent dark mode preference</li>
          <li>Introduce more text conversion utilities (e.g., slugify, remove punctuation)</li>
          <li>Save text history or allow undo/redo</li>
        </ul>
      </section>

      <section className="mt-4 p-3 surface rounded">
        <h3 className="h6 mb-2">Contact (optional)</h3>
        <p className="mb-1 text-secondary">If you'd like to contact me, replace the placeholders below with your real links.</p>
        <ul className="contact-list mb-0">
          <li>Email — <a href="mailto:you@example.com">you@example.com</a></li>
          <li>GitHub — <a href="https://github.com/your-github" target="_blank" rel="noreferrer">github.com/your-github</a></li>
          <li>LinkedIn — <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">linkedin.com/in/your-linkedin</a></li>
        </ul>
      </section>

    </div>
  );
}

