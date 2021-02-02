import React, { Component } from "react";
import "./secondPart.css";

export default class secondPart extends Component {
  render() {
    return (
      <div>
        <div className="second">
          <div className="heading2">
            <h1> SERVICES</h1>
          </div>
          <p className="Lorem"> Lorem ipsum dolor sit amet consectetur.</p>
          <div className="order">
            <div className="EComm">
              <img
                className="Image1"
                src="https://www.shareicon.net/data/2016/06/30/788741_commerce_512x512.png"
                alt="Italian Trulli"
              ></img>
              <h1>E-Commerce</h1>
              <h4 className="Lorem2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </h4>
            </div>
            <div className="Section">
            <img
                className="Image1"
                src="https://icon-library.com/images/web-design-icon-png/web-design-icon-png-3.jpg"
                alt="Italian Trulli"
              ></img>
                <h1>Responsive Design</h1>
              <h4 className="Lorem2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </h4>
            </div>
            <div className="Section">
            <img
                className="Image1"
                src="https://cdn1.iconfinder.com/data/icons/internet-technology-and-security-1/128/1-512.png"
                alt="Italian Trulli"
              ></img>
              <h1>Web Security</h1>
              <h4 className="Lorem2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
