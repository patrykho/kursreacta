import React from 'react';
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }
    render() {
        const { message, children } = this.props;
        return <ErrorMessage hasError={this.state.hasError} message={message} children={children} />
    }
}

const ErrorMessage = ({ hasError, message, children }) => {
    return hasError ? message : children
}