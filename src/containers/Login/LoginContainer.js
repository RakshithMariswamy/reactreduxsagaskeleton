import { connect } from "react-redux";
// import { getLogin } from "./actions";
import LoginComponent from "./LoginComponent";

export const mapStateToProps = () => ({
  // loginError: state.LoginInfo.errorMessage
});

export const mapDispatchToProps = {
  // getLoginCall: getLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
