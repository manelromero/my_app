import React from "react";

function FourthLevel({ showImage4, showLevel }) {
  const handleClick = () => {
    showLevel(4);
  };

  return (
    <div className="Level Fourth">
      <button onClick={handleClick}>Toggle</button>
      {showImage4 && <div className="Message">Showing image</div>}
    </div>
  );
}

export default FourthLevel;
