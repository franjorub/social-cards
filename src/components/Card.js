import React from "react";

import "./card.css";

const Card = props => {
  return (
    <div className="card">
      <img src={`${props.avatar}`} alt="" className="card-image" />
      <i class="fas fa-map-marker-alt icon" />
      <div className="content">{props.location}</div>
    </div>
  );
};

export default Card;
