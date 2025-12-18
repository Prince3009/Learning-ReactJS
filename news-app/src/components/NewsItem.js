import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    // Destructuring props to extract the data passed from the parent component
    let {title, description, imageUrl, newsUrl} = this.props;
    
    return (
      <div className='my-3'>
        <div className="card">
           {/* Displaying the image; using a fallback image if no image URL is provided */}
          <img src={!imageUrl ? "https://www.investopedia.com/thmb/7hBaNnM-X-PF2f4uaW_pd7qBGbs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2183848670-076b937f91864b9b8b394d0f50ec48f6.jpg" : imageUrl} className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a 
              href={newsUrl} // Link to the full news article
              target="_blank" // Opens the link in a new tab
              rel="noreferrer" // Prevents security risks when using target="_blank"
              className="btn btn-primary btn-sm" // Bootstrap small primary button
            >
              Read More
            </a>
            </div>
        </div>
      </div>
    )
  }
}
