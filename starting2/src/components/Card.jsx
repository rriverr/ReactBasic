import React from "react";

const Card = (props) => {
  return (
    
      <li className="concept" style={{float: "left"}}>
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </li>
  );
};

export default Card;
