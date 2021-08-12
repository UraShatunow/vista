import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import './intro.css';
import 'aos/dist/aos.css';

export default class Intro extends Component {

  state = {
    currentScrollPos: 0
  }

  componentDidMount() {
    Aos.init({});
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {

    const currentScrollPos = window.pageYOffset;

    this.setState({
      currentScrollPos
    });
  };

  render() {

    const yPos = this.state.currentScrollPos;
    const sizeValue = 100 + yPos / 50 + '%';
    const positionValue = '50%' + yPos / -5 + 'px';

    const divStyle = {
      backgroundSize: sizeValue ,
      backgroundPosition: positionValue
    }

    return (
        <div className="intro" style={divStyle} >
            <div className="container intro__container">
              <div className="intro__inner">
                <h1 data-aos="fade-right" data-aos-duration="2000">The New Standard in Data Analysis</h1>
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">Use Data to Get a 360-Degree View of Your Business</h2>
                <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">
                  <Link to="/" className="button_red intro__button">Learn More</Link>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

