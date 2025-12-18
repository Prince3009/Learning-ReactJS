import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

// Custom GitHub icon
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Custom LinkedIn icon
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.825 0-9.748h3.554v1.38c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.39 3.733 4.377v5.601zM5.337 9.766c-1.146 0-1.864-.762-1.864-1.715 0-.957.71-1.715 1.904-1.715 1.192 0 1.864.758 1.884 1.715 0 .953-.692 1.715-1.924 1.715zm1.959 10.686H3.394V8.704h3.902v11.748zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.203 0 22.224 0"/>
  </svg>
);

export default function Contact(){
  const [form, setForm] = useState({name: '', email: '', subject: '', message: ''});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate(){
    const err = {};
    if(!form.name.trim()) err.name = 'Please enter your full name';
    if(!form.email.trim()) err.email = 'Please enter your email';
    else if(!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Please enter a valid email address';
    if(!form.subject.trim()) err.subject = 'Please enter a subject';
    if(!form.message.trim()) err.message = 'Please write a message';
    return err;
  }

  function handleChange(e){
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}));
    setErrors(prev => ({...prev, [name]: undefined}));
  }

  function handleSubmit(e){
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if(Object.keys(err).length){
      setErrors(err);
      return;
    }
    // Simulate send
    setTimeout(()=>{
      setStatus('success');
      setForm({name:'', email:'', subject:'', message:''});
      setTimeout(() => setStatus(null), 3000);
    }, 350);
  }

  return (
    <div className="container my-1">
      {/* Hero Section */}
      <div className="contact-hero surface rounded p-4 mb-4">
        <h1 className="display-5 fw-bold mb-2">Get In Touch</h1>
        <p className="lead text-secondary mb-0">Have feedback, questions, or just want to say hello? I'd love to hear from you. Send a message or reach out through any of the channels below.</p>
      </div>

      {/* Main Contact Layout */}
      <div className="row g-3">
        {/* Contact Form */}
        <div className="col-lg-6">
          <div className="surface rounded p-4 shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2 className="h6 fw-bold mb-1">Send a message</h2>
            <p className="text-secondary small mb-3">I usually respond within 24–48 hours</p>

            <form onSubmit={handleSubmit} noValidate style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Name Field */}
              <div className="mb-2">
                <label className="form-label fw-500 text-dark" style={{ fontSize: '0.9rem' }}>Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`form-control ${errors.name ? 'is-invalid': ''}`}
                  style={{ fontSize: '0.9rem' }}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'err-name' : undefined}
                />
                {errors.name && <div id="err-name" className="invalid-feedback d-block">{errors.name}</div>}
              </div>

              {/* Email Field */}
              <div className="mb-2">
                <label className="form-label fw-500 text-dark" style={{ fontSize: '0.9rem' }}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@gmailCreate a React functional component named Home.jsx.
Use modern React with JSX.
Design a home page for a Text Converter application.
Include a hero section with title, subtitle, and two buttons.
Use semantic HTML and clean class names.
.com"
                  className={`form-control ${errors.email ? 'is-invalid': ''}`}
                  style={{ fontSize: '0.9rem' }}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'err-email' : undefined}
                />
                {errors.email && <div id="err-email" className="invalid-feedback d-block">{errors.email}</div>}
              </div>

              {/* Subject Field */}
              <div className="mb-2">
                <label className="form-label fw-500 text-dark" style={{ fontSize: '0.9rem' }}>Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={`form-control ${errors.subject ? 'is-invalid': ''}`}
                  style={{ fontSize: '0.9rem' }}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'err-subject' : undefined}
                />
                {errors.subject && <div id="err-subject" className="invalid-feedback d-block">{errors.subject}</div>}
              </div>

              {/* Message Field */}
              <div className="mb-3">
                <label className="form-label fw-500 text-dark" style={{ fontSize: '0.9rem' }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="4"
                  className={`form-control ${errors.message ? 'is-invalid': ''}`}
                  style={{ fontSize: '0.9rem', resize: 'none' }}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'err-message' : undefined}
                />
                {errors.message && <div id="err-message" className="invalid-feedback d-block">{errors.message}</div>}
              </div>

              {/* Submit Button & Status */}
              <div className="d-flex align-items-center gap-2 mt-auto">
                <button className="btn btn-primary fw-600 px-3" style={{ fontSize: '0.9rem' }} type="submit">
                  Send
                </button>
                {status === 'success' && (
                  <div className="alert alert-success mb-0 flex-grow-1" style={{ fontSize: '0.85rem', padding: '0.4rem 0.6rem' }}>
                    ✓ Thanks! I'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="col-lg-6">
          <div className="surface rounded p-4 shadow-sm" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 className="h4 fw-bold mb-5">Other ways to reach me</h3>

            {/* Email */}
            <div className="mb-5 d-flex gap-4">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'var(--surface)' }}>
                  <EnvelopeIcon className="nav-icon" style={{ color: 'var(--primary)', width: '28px', height: '28px' }} />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4 className="fw-bold mb-2" style={{ fontSize: '1.15rem' }}>Email</h4>
                <a href="mailto:thisisprince85@gmail.com" className="text-decoration-none" style={{ color: 'var(--primary)', fontSize: '1rem' }}>
                  thisisprince85@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="mb-5 d-flex gap-4">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'var(--surface)' }}>
                  <GithubIcon style={{ color: 'var(--primary)', width: '28px', height: '28px' }} />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4 className="fw-bold mb-2" style={{ fontSize: '1.15rem' }}>GitHub</h4>
                <a href="https://github.com/Prince3009" target="_blank" rel="noreferrer" className="text-decoration-none" style={{ color: 'var(--primary)', fontSize: '1rem' }}>
                  github.com/Prince3009
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="mb-5 d-flex gap-4">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'var(--surface)' }}>
                  <LinkedInIcon style={{ color: 'var(--primary)', width: '28px', height: '28px' }} />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4 className="fw-bold mb-2" style={{ fontSize: '1.15rem' }}>LinkedIn</h4>
                <a href="https://linkedin.com/in/prince-fsd" target="_blank" rel="noreferrer" className="text-decoration-none" style={{ color: 'var(--primary)', fontSize: '1rem' }}>
                  linkedin.com/in/prince-fsd
                </a>
              </div>
            </div>

            {/* Response Time Note */}
            <div className="mt-auto pt-4 border-top">
              <p className="text-secondary mb-2" style={{ fontSize: '1rem' }}>
                <strong>Response time:</strong> Usually within 24–48 hours
              </p>
              <p className="text-secondary mb-0" style={{ fontSize: '1rem' }}>
                Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
