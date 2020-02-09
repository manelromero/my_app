import React from "react";
import { connect } from "react-redux";
import showLevel from "../actions";

function FourthLevel({ showLevel }) {
  const handleClick = () => {
    showLevel(4);
  };

  return (
    <div className="Level Fourth">
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

const mapStateToProps = state => {
  const { showImage2 } = state;
  return { showImage2 };
};

const mapDispatchToProps = {
  showLevel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FourthLevel);
