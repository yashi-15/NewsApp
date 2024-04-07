import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News key = "general" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="general" pagesize="20" />}/>
            <Route exact path="/entertainment" element={<News key = "entertainment" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="entertainment" pagesize="20" />} />
            <Route exact path="/health" element={<News key = "health" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="health" pagesize="20" />} />
            <Route exact path="/business" element={<News key = "business" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="business" pagesize="20" />} />
            <Route exact path="/science" element={<News key = "science" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="science" pagesize="20" />} />
            <Route exact path="/sports" element={<News key = "sports" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="sports" pagesize="20" />} />
            <Route exact path="/technology" element={<News key = "technology" apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="technology" pagesize="20" />} />
          </Routes>
        </BrowserRouter>
        <News apikey="4d18a59c3b5e4919a996e6c84467c007" country="in" category="sports" pagesize="20" />
      </div>
    );
  }
}
