import React from "react";
import ReactDOM from "react-dom";

import SocialCard from "./components/SocialCard";

import { Component } from "react";
import "./app.css";
export default class App extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext&amount=9")
      .then(response => response.json())
      .then(data => this.setState({ people: data }));
  }
  render() {
    return (
      <div className="grid">
        {this.state.people.map((person, index) => (
          <SocialCard person={person} key={index} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
