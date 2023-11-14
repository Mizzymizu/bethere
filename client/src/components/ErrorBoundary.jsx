// Import necessary modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can log the error to an error reporting service here
    console.error(error, info);
  }

  render() {
    // If an error occurs, render an error message
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    // Otherwise, render the children
    return this.props.children;
  }
}

// Add PropTypes for 'children'
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
