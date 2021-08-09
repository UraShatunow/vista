import React, { Component } from 'react';
import Intro from '../intro';
import Header from '../header';


export default class HomePage extends Component {

  render() {

    return (
      <div className="home">
        <Header />
        <Intro />                                                                                                                                                                                                        
      </div>
    );
  }
}