import React, { Component, PropsWithChildren } from 'react';
import FallBackUI from './FallbackUI';

class ErrorBoundary extends Component<PropsWithChildren<any>, any> {
  constructor(props: PropsWithChildren<any>) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <FallBackUI />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
