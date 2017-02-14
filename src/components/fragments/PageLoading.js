import React from "react";
import App from "../App";
import Spinner from "./Spinner";

const PageLoading = () => {
  return (
    <App title="Loading">
      <main className="flex items-center justify-center w-100 vh-75 center">
        <Spinner />
      </main>
    </App>
  );
};

export default PageLoading;
