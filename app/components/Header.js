import React from "react";

export class Header extends React.Component {
  render(){
    return (
        <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </nav>
    );
  }
}
