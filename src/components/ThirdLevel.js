import React from "react";
import { connect } from "react-redux";
import showLevel from "../actions";

function ThirdLevel({ showLevel }) {
  const handleClick = () => {
    showLevel(3);
  };

  return (
    <div className="Level Third">
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

const mapStateToProps = state => {
  const { showImage3 } = state;
  return { showImage3 };
};

const mapDispatchToProps = {
  showLevel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThirdLevel);
