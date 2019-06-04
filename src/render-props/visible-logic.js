import React from "react";

function VisibleLogic({ children, render= children }) {
  const [isVisible, setIsVisible] = React.useState(document.visibilityState);
  const [list, setList] = React.useState([
    <li key={Date.now()}>
      {isVisible}, {new Date().toLocaleString()}
    </li>
  ]);

  function changeVisibility() {
    console.log("changeVisibility");
    setIsVisible(changeList());
  }

  function changeList() {
    setList(
      list.concat(
        <li key={Date.now()}>
          {document.visibilityState}, {new Date().toLocaleString()}
        </li>
      )
    );
    return document.visibilityState;
  }

  React.useEffect(() => {
    document.addEventListener("visibilitychange", changeVisibility);
    return () => {
      document.removeEventListener("visibilitychange", changeVisibility);
    };
  });

  return render({ isVisible, list });
}

export default VisibleLogic;
