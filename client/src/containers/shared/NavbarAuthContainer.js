import { connect } from 'react-redux';
import NavbarAuth from '../../components/shared/NavbarAuth';

import { signOut } from "../../actions/UserAction";

import { withRouter } from "react-router-dom";

const mapStatesToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: (e) => {
      e.preventDefault();
      dispatch(signOut());
    }
  }
};

const NavbarAuthContainer =  connect(mapStatesToProps, mapDispatchToProps)(NavbarAuth);

export default withRouter(NavbarAuthContainer);