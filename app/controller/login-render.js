import React from "react";
import {render} from "react-dom";
import {Header} from "../components/Header";
import {Home} from "../components/Home";

class Login extends React.Component {

  render(){
    return(
      <div>
        <Header/>
        <Home />
        <h1>Login!!</h1>

      </div>
    );
  }
}
render(<Login/>, window.document.getElementById("searchableTable"));
