import React, { Component } from 'react';
import Intro from '../intro';
import Header from '../header';
import Examples from '../examples';
import TextSection from '../text-section';
import Numbers from '../numbers';
import Abstraction from '../abstraction';
import Business from '../business';


export default class HomePage extends Component {

  render() {

    return (
      <div className="home">
        <Header />
        <Intro />
        <Examples />
        <TextSection />
        <Numbers />
        <Abstraction />
        <Business />                                                                                                                                                                                                       
      </div>
    );
  }
}