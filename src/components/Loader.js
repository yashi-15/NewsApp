import React, { Component } from 'react'
import loading from './loading-unscreen.gif';

export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading...'/>
      </div>
    )
  }
}
