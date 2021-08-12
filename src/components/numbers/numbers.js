import React, { Component } from 'react';
import Aos from 'aos';
import './numbers.css';
import 'aos/dist/aos.css';

export default class Numbers extends Component {

  componentDidMount() {
    Aos.init({});
  }

  render() {

    return (
        <div className="numbers" >
            <div className="container numbers__container">
                <h2>We Take Pride in Our Numbers</h2>
                <div className="numbers__inner">
                    <div className="numbers__item">
                        <h3 data-aos="fade-right" data-aos-duration="1500">15</h3>
                        <p data-aos="fade-right" data-aos-duration="1500">Years of Experience</p>
                        <div className="numbers__stripe-container">
                            <div className="numbers__stripe" data-aos="fade-right" data-aos-duration="1500"></div>
                        </div>
                    </div>
                    <div className="numbers__item">
                        <h3 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">10K</h3>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">Business Partners</p>
                        <div className="numbers__stripe-container">
                            <div className="numbers__stripe" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200"></div>
                        </div>
                    </div>
                    <div className="numbers__item">
                        <h3 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">25M</h3>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">Products Installed</p>
                        <div className="numbers__stripe-container">
                            <div className="numbers__stripe" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400"></div>
                        </div>
                    </div>
                    <div className="numbers__item">
                        <h3 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">22</h3>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">Countries World Wide</p>
                        <div className="numbers__stripe-container">
                            <div className="numbers__stripe" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600"></div>
                        </div>
                    </div>
                    <div className="numbers__item">
                        <h3 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">5</h3>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">Industry Awards</p>
                        <div className="numbers__stripe-container">
                            <div className="numbers__stripe" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

