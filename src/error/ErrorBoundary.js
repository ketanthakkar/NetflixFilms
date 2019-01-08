import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error) {
      this.setState({
        hasError: error
      });
    }
  
    render() {
      if (this.state.hasError) {
        return <h2 className="nofilm-error">No films found</h2>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;