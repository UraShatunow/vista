import React, { Component } from "react";
import './abstraction.css';

export default class Abstraction extends Component {

    state = {
        currentScrollPos: 0
      }
    
      componentDidMount() {
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
        const yValue = yPos / 4  - 1000;
        const positionValue = `${yValue}px`;

        const divStyle = {
          backgroundPositionX: positionValue
        }

        return (
            <div className="abstraction" style={divStyle}></div>
        );
    }
}