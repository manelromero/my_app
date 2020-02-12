import { connect } from "react-redux";
import FirstLevel from "./FirstLevel";
import showLevel from "../../actions";

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
