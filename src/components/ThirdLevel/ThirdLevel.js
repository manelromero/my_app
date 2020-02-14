import React from "react";

function ThirdLevel({ showImage3, showLevel }) {
  const handleClick = () => {
    showLevel(3);
  };

  return (
    <div className="Level Third">
      <button onClick={handleClick}>Toggle</button>
      {showImage3 && <div className="Message">Showing Catalan flag</div>}
    </div>
  );
}

export default ThirdLevel;
