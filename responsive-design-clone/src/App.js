import React, { Component } from "react";
import "./App.css";

import SecondPart from "./components/SecondPart";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
  }
  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  render() {
    let { isMenuOpen } = this.state;
    console.log(this.state);
    let shouldShow = isMenuOpen ? "mobile-nav-bar-show" : null;
    console.log(shouldShow);
    return (
      <div>
        <div className="main">
          <div className="header">
            <div className="hamburger">
              <p>Menu</p>
              <img
                onClick={() => this.toggleMenu()}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
              />
            </div>

            <nav className={`mobile-nav-bar ${shouldShow}`}>
              <p className="mobile-nav-item">Services</p>
              <p className="mobile-nav-item">About</p>
              <p className="mobile-nav-item">Team</p>
              <p className="mobile-nav-item">Contact</p>
            </nav>

            <div className="boot"> Start Bootstrap</div>
            <nav className="nav">
              <p className="nav-item">Services</p>
              <p className="nav-item">About</p>
              <p className="nav-item">Team</p>
              <p className="nav-item">Contact</p>
            </nav>
          </div>

          <div>
            <div className="welcome">
              <p>Welcome to Our Studio!</p>
              <p className="greet">ITS NICE TO MEET YOU</p>
            </div>
            <div className="button">
              <button>TELL ME MORE</button>
            </div>
          </div>
        </div>
        <SecondPart />
{/* 

        <div className="second">
          <div className= "heading2">
            <h1> SERVICES</h1>
            </div >
           <p className="Lorem"> Lorem ipsum dolor sit amet consectetur.</p>
         
          <div className="EComm">
          <img className="Image1"src="https://www.shareicon.net/data/2016/06/30/788741_commerce_512x512.png" alt="Italian Trulli"></img>
            <h1>E-Commerce</h1>
            <h4 className="Lorem2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </h4>
          </div>
          <div>
            <h3>Responsive Design</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </h4>
          </div>
          <div>
            <h3>Web Security</h3>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </h4>
          </div>
        </div> */}
      </div>
    );
  }
}
