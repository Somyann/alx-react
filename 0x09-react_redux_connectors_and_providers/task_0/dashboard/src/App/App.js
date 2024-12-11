import React from 'react';
import { connect } from 'react-redux';

const App = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);