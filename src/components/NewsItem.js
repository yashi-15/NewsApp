import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description, imgURL, linkURL} = this.props
    return (
      <div>
        <div className="card m-3" style={{width: "18rem"}}>
          <img src={imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={linkURL} target="__blank" className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
