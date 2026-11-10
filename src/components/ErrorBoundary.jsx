import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#FAF6F0',
          color: '#590907',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', marginBottom: '20px' }}>Something went wrong.</h1>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.2rem', marginBottom: '30px' }}>We apologize for the inconvenience. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 30px',
              backgroundColor: '#590907',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 500
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
