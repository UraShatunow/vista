import React, { Component } from "react";
import { Link } from "react-router-dom";
import './header.css';

export default class Header extends Component {
  
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {

    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {

    return (
      <div className={`header${this.state.visible ? "" : " header_hidden" }`}>
        <div className="container header__container">
            <Link to="/" className="header__logo">VISTA.IO</Link>
            <nav>
                <Link to="/" className="header__nav-item">Home</Link>
                <Link to="/" className="header__nav-item">Solutions</Link>
                <Link to="/" className="header__nav-item">Vision</Link>
                <Link to="/" className="header__nav-item">Blog</Link>
                <Link to="/" className="button_dark header__button">Get Started</Link>
            </nav>
        </div>
      </div>
    );
  }
}