import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './business.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import logo1 from './img/pic-1.webp';
import logo2 from './img/pic-2.webp';
import logo3 from './img/pic-3.webp';
import logo4 from './img/pic-4.webp';

export default class Business extends Component {

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
        const yValue = yPos / 50 + 60;
        const positionValue = `${yValue}%`;

        const divStyle = {
        backgroundSize: positionValue
        }

        return (
            <div className="business">
                <div className="container business__container">
                    <div className="business__partners">
                        <div className="business__partner">
                            <h3 data-aos="fade-right" data-aos-duration="1500">Our<br />Partners</h3>
                        </div>
                        <div className="business__partner business__partner-2">
                            <img src={logo1} alt="Mikron logo" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200" />
                        </div>
                        <div className="business__partner business__partner-3">
                            <img src={logo2} alt="Pome logo" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" />
                        </div>
                        <div className="business__partner business__partner-4">
                            <img src={logo3} alt="Garmoosh logo" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600" />
                        </div>
                        <div className="business__partner business__partner-5">
                            <img src={logo4} alt="Velocity logo" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800" />
                        </div>
                    </div>
                    <div className="business__inner">
                        <div className="business__inner-pic" style={divStyle}>
                            <h2 data-aos="fade-up" data-aos-duration="1500">Are You Ready to Accelerate<br />Your Business?</h2>
                        </div>
                        <div className="business__inner-text">
                            <div>
                                <p data-aos="fade-right" data-aos-duration="1500">
                                    I'm a paragraph. Click here to add your own text and edit me. 
                                    It’s easy. Just click “Edit Text” or double click me to add your 
                                    own content and make changes to the font. 
                                </p>
                                <div data-aos="fade-right" data-aos-duration="1500">
                                    <Link to="/" className="button button_red">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}