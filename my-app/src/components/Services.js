import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, SparklesIcon, ArrowPathIcon, DocumentDuplicateIcon, HashtagIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Services(){
  return (
    <div className="container my-1">
      <header className="services-hero p-4 rounded mb-4 surface">
        <h1 className="display-6 mb-2">Our Services</h1>
        <p className="lead text-secondary mb-0">TextChanger helps you edit, format, and clean text quickly — no downloads, no account required. Use it to format text for documents, social posts, coding examples, and more.</p>
      </header>

      <section className="services-grid mt-3">
        <article className="service-card surface rounded p-3" aria-labelledby="s-uppercase">
          <div className="d-flex align-items-start mb-2">
            <div className="service-icon-wrap me-2"><ArrowUpIcon className="service-icon" /></div>
            <h3 id="s-uppercase" className="h6 mb-0">Convert to UPPERCASE</h3>
          </div>
          <p className="small text-secondary mb-0">Make entire text uppercase to emphasize headings, titles, or calls-to-action.</p>
        </article>

        <article className="service-card surface rounded p-3" aria-labelledby="s-lowercase">
          <div className="d-flex align-items-start mb-2">
            <div className="service-icon-wrap me-2"><ArrowDownIcon className="service-icon" /></div>
            <h3 id="s-lowercase" className="h6 mb-0">Convert to lowercase</h3>
          </div>
          <p className="small text-secondary mb-0">Normalize text to lowercase for consistency in data or communication.</p>
        </article>

        <article className="service-card surface rounded p-3" aria-labelledby="s-capwords">
          <div className="d-flex align-items-start mb-2">
            <div className="service-icon-wrap me-2"><SparklesIcon className="service-icon"/></div>
            <h3 id="s-capwords" className="h6 mb-0">Capitalize Each Word</h3>
          </div>
          <p className="small text-secondary mb-0">Convert each word's first letter to uppercase — great for titles and names.</p>
        </article>

        <article className="service-card surface rounded p-3" aria-labelledby="s-sentencecase">
          <div className="d-flex align-items-start mb-2">
            <div className="service-icon-wrap me-2"><ChartBarIcon className="service-icon" /></div>
            <h3 id="s-sentencecase" className="h6 mb-0">Sentence Case</h3>
          </div>
          <p className="small text-secondary mb-0">Change text so only the first letter of each sentence is capitalized for readability.</p>
        </article>

        <article className="service-card surface rounded p-3" aria-labelledby="s-reverse">
          <div className="d-flex align-items-start mb-2">
            <div className="service-icon-wrap me-2"><ArrowPathIcon className="service-icon" /></div>
            <h3 id="s-reverse" className="h6 mb-0">Reverse Text</h3>
          </div>
          <p className="small text-secondary mb-0">Reverse characters for simple encoding or playful transformations.</p>
        </article>

        <article className="service-card surface rounded p-3" aria-labelledby="s-spaces">
          <div className="d-flex align-items-start mb-2">
            <div className="service-icon-wrap me-2"><HashtagIcon className="service-icon" /></div>
            <h3 id="s-spaces" className="h6 mb-0">Remove Extra Spaces</h3>
          </div>
          <p className="small text-secondary mb-0">Trim duplicate spaces and tidy up copied text or pasted content.</p>
        </article>

        <article className="service-card surface rounded p-3" aria-labelledby="s-copy">
          <div className="d-flex align-items-start mb-2">
            <div className="service-icon-wrap me-2"><DocumentDuplicateIcon className="service-icon" /></div>
            <h3 id="s-copy" className="h6 mb-0">Copy to Clipboard</h3>
          </div>
          <p className="small text-secondary mb-0">Copy results with a click — helpful for quick pastes into emails, documents, or chats.</p>
        </article>

        <article className="service-card surface rounded p-3" aria-labelledby="s-count">
          <div className="d-flex align-items-start mb-2">
            <div className="service-icon-wrap me-2"><ChartBarIcon className="service-icon" /></div>
            <h3 id="s-count" className="h6 mb-0">Word Count + Character Count</h3>
          </div>
          <p className="small text-secondary mb-0">Instant summary: see how many words and characters your text contains.</p>
        </article>
      </section>

      <section className="why-choose mt-4 p-3 surface rounded">
        <h3 className="h5">Why Choose Our Tool?</h3>
        <ul className="mt-2">
          <li>Fast and free — no sign-up required.</li>
          <li>Secure — your text is processed in your browser; we don’t store it.</li>
          <li>Mobile friendly — works great on phones and tablets.</li>
          <li>Easy to use — a simple interface you can learn in seconds.</li>
        </ul>
      </section>

    </div>
  );
}
