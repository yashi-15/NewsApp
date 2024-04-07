import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
 
render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} key = "general" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="general" pagesize="20" />} />
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key = "entertainment" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="entertainment" pagesize="20" />} />
            <Route exact path="/health" element={<News setProgress = {this.setProgress} key = "health" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="health" pagesize="20" />} />
            <Route exact path="/business" element={<News setProgress = {this.setProgress} key = "business" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="business" pagesize="20" />} />
            <Route exact path="/science" element={<News setProgress = {this.setProgress} key = "science" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="science" pagesize="20" />} />
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} key = "sports" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="sports" pagesize="20" />} />
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} key = "technology" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="technology" pagesize="20" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
