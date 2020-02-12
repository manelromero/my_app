import { connect } from "react-redux";
import ThirdLevel from "./ThirdLevel";
import showLevel from "../../actions";

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
