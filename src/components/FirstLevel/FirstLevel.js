import React from "react";

function FirstLevel({ showImage1, showLevel }) {
  const handleClick = () => {
    showLevel(1);
  };

  return (
    <div className="Level First">
      <button onClick={handleClick}>Toggle</button>
      {showImage1 && <div className="Message">Showing image</div>}
    </div>
  );
}

export default FirstLevel;
