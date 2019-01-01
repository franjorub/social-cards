import React, { Component } from "react";
import Card from "./Card";
import "./socialCard.css";
export default class SocialCard extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className="social-card">
        <div className="header">
          <div className="avatar">
            <img src={`${person.photo}`} alt="" />
          </div>
          <div className="title">
            {person.name} Has upload a new profile picture
          </div>
        </div>
        <div className="body">
          <Card
            avatar={person.photo}
            name={person.name}
            location={person.region}
          />
        </div>
        <div className="actions">
          <i class="far fa-heart icon" />
          <i class="far fa-comment-dots icon" />
          <i class="fas fa-share icon" />
        </div>
      </div>
    );
  }
}
