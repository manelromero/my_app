import React from "react";
import { connect } from "react-redux";

function Right({ showImage1, showImage2, showImage3, showImage4, showImage5 }) {
  return (
    <div className="Right">
      <div className="Image Background"></div>
      {showImage1 && <div className="Image Image1"></div>}
      {showImage2 && <div className="Image Image2"></div>}
      {showImage3 && <div className="Image Image3"></div>}
      {showImage4 && <div className="Image Image4"></div>}
      {showImage5 && <div className="Image Image5"></div>}
    </div>
  );
}

const mapStateToProps = state => {
  const { showImage1, showImage2, showImage3, showImage4, showImage5 } = state;
  return { showImage1, showImage2, showImage3, showImage4, showImage5 };
};

export default connect(mapStateToProps)(Right);
