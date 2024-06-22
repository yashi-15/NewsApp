import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description, imgURL, linkURL, datetime, source} = this.props
    return (
      <>
        <div className="card m-3 text-light" style={{width: "18rem",backgroundColor:"#646C79"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1, left: '90%' }}> <small>{source}</small></span>
          <img src={imgURL? imgURL: "https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2016/08/News-app-iPad-hero.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">{title ? title.length > 70 ? title.substring(0, 70) + '...' : title : '(No title)'}</h5>
            <p className="card-text">
              {description ? description.length > 150 ? description.substring(0, 150) + '...' : description : '(No description)'}
            </p>
            <p className="card-text"><small className="text-black">{new Date(datetime).toGMTString()}</small></p></div>
            <a href={linkURL} target="__blank" className="btn btn-danger btn-sm">
              Read more
            </a>
          </div>
        </>
    );
  }
}
