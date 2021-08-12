import React, { Component } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './examples.css';

export default class Examples extends Component {

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
        const yValue = yPos / 50 + 50;
        const positionValue = `${yValue}%`;

        const divStyle = {
            backgroundPosition: positionValue
        }

        return (
        <div className="examples">
            <div className="container examples__container">
                <div className="examples__inner">
                    <div className="examples__text" style={divStyle}>
                        <div className="examples__text-inner" data-aos="fade-right" data-aos-duration="1500">
                            <h2>Let Your Data Take Your Business to Higher Grounds</h2>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                        </div>
                    </div>
                    <div className="examples__cards">
                        <div className="examples__cards-group-1">
                            <div className="examples__card" data-aos="fade-up-right" data-aos-duration="500">
                                <div className="examples__card-inner">
                                    <div className="examles__pic examles__pic-1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"></div>
                                    <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Cloud Analytics Modernization</h3>
                                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                                    <div className="examples__stripe" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"></div>
                                </div>
                            </div>
                            <div className="examples__card" data-aos="fade-up-right" data-aos-duration="500">
                                <div className="examples__card-inner">
                                    <div className="examles__pic examles__pic-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"></div>
                                    <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Versatility in Application</h3>
                                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                                    <div className="examples__stripe" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"></div>
                                </div>
                            </div>
                        </div>
                        <div className="examples__cards-group-2" >
                            <div className="examples__card" data-aos="fade-up-right" data-aos-duration="500">
                                <div className="examples__card-inner">
                                    <div className="examles__pic examles__pic-3" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"></div>
                                    <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Data Science Acceleration</h3>
                                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                                    <div className="examples__stripe"></div>
                                </div>
                            </div>
                            <div className="examples__card" data-aos="fade-up-right" data-aos-duration="500">
                                <div className="examples__card-inner">
                                    <div className="examles__pic examles__pic-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"></div>
                                    <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Full Customer Experience Service</h3>
                                    <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                                    <div className="examples__stripe" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}