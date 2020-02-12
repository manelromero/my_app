import { connect } from "react-redux";
import SecondLevel from "./SecondLevel";
import showLevel from "../../actions";

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
)(SecondLevel);
