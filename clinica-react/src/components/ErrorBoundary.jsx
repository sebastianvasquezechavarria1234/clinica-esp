import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-50 text-center px-4">
          <h1 className="text-4xl font-bold text-red-600 mb-4">¡Ups! Algo salió mal.</h1>
          <p className="text-xl text-gray-700 mb-6">Estamos trabajando para solucionarlo. Por favor, intenta recargar la página.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-clinic-green text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition-colors"
          >
            Recargar página
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
