import React from "react";
import VisibleLogic from "./visible-logic";

function Visibility() {
  return (
    <VisibleLogic
      render={({ isVisible, list }) => (
        <>
          <h1>{isVisible}</h1>
          <ul>{list}</ul>
        </>
      )}
    />
  );
}

export default Visibility;
