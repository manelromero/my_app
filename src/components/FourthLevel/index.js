import { connect } from "react-redux";
import FourthLevel from "./FourthLevel";
import showLevel from "../../actions";

const mapStateToProps = state => {
  const { showImage4 } = state;
  return { showImage4 };
};

const mapDispatchToProps = {
  showLevel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FourthLevel);
