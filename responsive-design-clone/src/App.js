import "./App.css";

import React, { Component } from "react";

export default class App extends Component {

constructor(){
  super()
  this.state ={
    isMenuOpen:false,
  }
}
toggleMenu = () => {
  this.setState({
    isMenuOpen: !this.state.isMenuOpen
  })
}



  render() {
    let { isMenuOpen } = this.state
    console.log(this.state)
    let shouldShow = isMenuOpen ? 'mobile-nav-bar-show' : null
console.log(shouldShow)
    return (
      <div>
      <div className="main">
        <div className="header">
        <div  className="hamburger">
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
         
        <div className="welcome"><p>Welcome to Our Studio!</p>
          <p className="greet">ITS NICE TO MEET YOU</p>
         </div>
        <div className="button">
         <button>TELL ME MORE</button>
         </div>
        </div>
        <div>
        </div>
        <div className="second">
      <div>  
      <h3> SERVICES</h3>
Lorem ipsum dolor sit amet consectetur.
</div>
<div>
<h3>E-Commerce</h3>
<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
</h4>
</div>
<div>
<h3>
Responsive Design
</h3>
<h4>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
</h4>
</div>
<div>
<h3>
Web Security
</h3>
<h4>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
</h4>
</div>
</div>


        </div>
      </div>
    );
  }
}
