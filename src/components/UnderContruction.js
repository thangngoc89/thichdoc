import React from "react";
import defaultPage from "../hocs/defaultPage";
import MetaTitle from "./MetaTitle";

const UnderConstruction = () => {
  return (
    <div>
      <MetaTitle title="Oops !" />
      <main className="flex items-center justify-center w-100 vh-100 center">
        <h1 className="f1">Under Construction</h1>
      </main>
    </div>
  );
};

export default defaultPage(UnderConstruction);
