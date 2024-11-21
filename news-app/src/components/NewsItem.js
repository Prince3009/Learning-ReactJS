import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
          <img src={!imageUrl ? "https://www.investopedia.com/thmb/7hBaNnM-X-PF2f4uaW_pd7qBGbs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2183848670-076b937f91864b9b8b394d0f50ec48f6.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
