import React, { Component } from 'react';


export default class SearchPanel extends Component {
  
  render() {
    return (
      <input 
        type="text"
        className="form-control search-input"
        placeholder="search" />
    )
  };
}