import React from "react";

function SecondLevel({ showImage2, showLevel }) {
  const handleClick = () => {
    showLevel(2);
  };

  return (
    <div className="Level Second">
      <button onClick={handleClick}>Toggle</button>
      {showImage2 && <div className="Message">Showing image</div>}
    </div>
  );
}

export default SecondLevel;
