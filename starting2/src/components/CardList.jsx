import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const concepts = props.data;

  return (
    <React.Fragment>
      <ul id="concepts">
        {concepts.map((c, i) => {
          return <Card title={c.title} img={c.image} desc={c.description} />;
        })}
      </ul>
    </React.Fragment>
  );
};
export default CardList;
