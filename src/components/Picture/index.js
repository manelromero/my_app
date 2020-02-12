import { connect } from "react-redux";
import Picture from "./Picture";

const mapStateToProps = state => {
  const { showImage1, showImage2, showImage3, showImage4, showImage5 } = state;
  return { showImage1, showImage2, showImage3, showImage4, showImage5 };
};

export default connect(mapStateToProps)(Picture);
