import React from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </React.Fragment>
  );
};

export default ErrorPage;

