import React, {ErrorInfo, ReactNode} from 'react';
import {ErrorMessage} from './ErrorMessageI';

interface Iprops {
  message: string;
}

interface Istate {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<Iprops, Istate> {
  state = {hasError: false};

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render() {
    const {message, children} = this.props;
    return (
      <ErrorMessage
        hasError={this.state.hasError}
        message={message}
        children={children}
      />
    );
  }
}
