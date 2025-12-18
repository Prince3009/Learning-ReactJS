import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export default class News extends Component {

defaultProps = {
    country : 'us',
    pageSize: 12
  }
proptypes = {
    country : PropTypes.string,
    pageSize  : PropTypes.number
  }
  constructor() {
    super();
    this.state = {
      articles : [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a044473279b8453db9ade7b3f2021bd3&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false, totalArticles: parsedData.totalResults});
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a044473279b8453db9ade7b3f2021bd3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false, page: this.state.page - 1 });

  }

  handleNextClick = async () => {
 
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a044473279b8453db9ade7b3f2021bd3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, loading: false, page: this.state.page + 1 });
  

  }
  render() {
    const totalPages = Math.ceil(this.state.totalArticles/this.props.pageSize);

    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsSnap - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="className col-lg-4"  key={element.url}>
            <NewsItem title={element.title ? element.title.slice(0,45) : element.title} description={element.description ? element.description.slice(0,88) : element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
          })}
        </div>
        <div className='conatiner d-flex justify-content-between'>
        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>                {/* &larr and &rarr used for arrows in previos and next button */}
        <button disabled={this.state.page >= totalPages} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
