import React, { Component } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import './text-section.css';
import 'aos/dist/aos.css';

export default class TextSection extends Component {


  componentDidMount() {
    Aos.init({});
  }


  render() {

    return (
        <div className="text-section" >
            <div className="container text-section__container">
              <div className="text-section__inner">
                <div className="text-section__pic">
                    <h2 data-aos="fade-up" data-aos-duration="1500">Unprecedented Velocity.<br /> Impeccable Reliability.</h2>
                </div>
                <div className="text-section__text">
                    <div className="text-section__text-inner" data-aos="fade-right" data-aos-duration="1500">
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. 
                            It’s easy. Just click “Edit Text” or double click me to add your 
                            own content and make changes to the font. Feel free to drag and drop 
                            me anywhere you like on your page. I’m a great place for you to tell a story 
                            and let your users know a little more about you.
                        </p>
                        <p>
                            This is a great space to write a long text about your company and your services. 
                            You can use this space to go into a little more detail about your company. 
                            Talk about your team and what services you provide. 
                            Tell your visitors the story of how you came up with the idea for your 
                            business and what makes you different from your competitors. Make your 
                            company stand out and show your visitors who you are.
                        </p>
                        <Link to="/" className="button button_red">Learn More</Link>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

