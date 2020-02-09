import React from "react";
import { connect } from "react-redux";
import showLevel from "../actions";

function FirstLevel({ showLevel }) {
  const handleClick = () => {
    showLevel(1);
  };

  return (
    <div className="Level First">
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

const mapStateToProps = state => {
  const { showImage1 } = state;
  return { showImage1 };
};

const mapDispatchToProps = {
  showLevel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstLevel);
