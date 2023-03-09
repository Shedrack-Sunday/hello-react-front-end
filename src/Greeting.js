import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from './store/index';

function Greeting(props) {
  useEffect(() => {
    props.fetchGreeting();
  }, []);

  return (
    <div>
      <h1>{props.greeting}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
