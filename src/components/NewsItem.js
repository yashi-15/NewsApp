import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description, imgURL, linkURL, datetime, source} = this.props
    return (
      <div>
        <div className="card m-3" style={{width: "18rem"}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1, left: '90%' }}> <small>{source}</small></span>
          <img src={imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">{new Date(datetime).toGMTString()}</small></p></div>
            <a href={linkURL} target="__blank" className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
    );
  }
}
