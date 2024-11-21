import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles : [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a044473279b8453db9ade7b3f2021bd3";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsSnap - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className="className col-md-4"  key={element.url}>
            <NewsItem title={element.title ? element.title.slice(0,45) : element.title} description={element.description ? element.description.slice(0,88) : element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
          })}
        </div>
        <div className='conatiner d-flex justify-content-between'>
        <button type="button" class="btn btn-primary" m-10>&larr; Previous</button>                {/* &larr and &rarr used for arrows in previos and next button */}
        <button type="button" class="btn btn-primary" m-10>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
