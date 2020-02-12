import React from "react";
import FirstLevel from "../FirstLevel";
import SecondLevel from "../SecondLevel";
import ThirdLevel from "../ThirdLevel";
import FourthLevel from "../FourthLevel";

function Left() {
  return (
    <div className="Left">
      <FirstLevel />
      <SecondLevel />
      <ThirdLevel />
      <FourthLevel />
    </div>
  );
}

export default Left;
