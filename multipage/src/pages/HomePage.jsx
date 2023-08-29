import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  // const navigateHandler = () => {
  //   navigate('/products');
  // };
  return (
    <React.Fragment>
      <h1>My Home Page</h1>
      <p>
        Go to
        <Link to="/products">the list of products</Link>
        {/* <a href="/products">the list of products</a> */}
      </p>
      {/* <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p> */}
    </React.Fragment>
  );
};

export default HomePage;
