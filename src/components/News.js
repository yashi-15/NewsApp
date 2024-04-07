import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0
    };
  };  
  componentDidMount() {
    this.setState( {loading: true} );
    const api_key="4d18a59c3b5e4919a996e6c84467c007";
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&page=${this.state.page}&pageSize=20`)
    .then(res => res.json())
    .then((data) =>{
        this.setState({
            articles : data.articles,
            totalResults : data.totalResults,
            loading : false
        })
    });
}
handlePrevPage=async()=>{
  this.setState( {loading: true} );
    const api_key="4d18a59c3b5e4919a996e6c84467c007";
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&page=${this.state.page - 1}&pageSize=20`)
    .then(res => res.json())
    .then((data) =>{
        this.setState({
            page : this.state.page - 1,
            articles : data.articles,
            loading : false
        })
    });
}
handleNextPage=async()=>{
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {
        
    }else {
      this.setState( {loading: true} );
        const api_key="4d18a59c3b5e4919a996e6c84467c007";
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&page=${this.state.page + 1}&pageSize=20`)
        .then(res => res.json())
        .then((data) =>{
            this.setState({
                page : this.state.page + 1,
                articles : data.articles,
                loading : false
            })
        });
    }
    }
  render() {
    return (
      <div className='container mt-3'>
        <h1>Top Headlines</h1>
        {this.state.loading && <Loader/>}
        <div className='d-flex flex-wrap' data-masonry={{"percentPosition": true }}>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <NewsItem title= {element.title} description = {element.description} imgURL = {element.urlToImage} linkURL = {element.url} key = {element.url} />
          })}      
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevPage}>&#8592; Previous</button>
            <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next &#8594;</button>
        </div>
      </div>
    )
  }
}
