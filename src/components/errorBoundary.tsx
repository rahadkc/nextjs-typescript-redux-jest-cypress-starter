import React, { Component, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  //   errorMessage?: string
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    // errorMessage: '',
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  //   public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //     console.log('Uncaught error:', error, errorInfo)
  //   }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-5">Oops, something is wrong!</h1>

              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.setState({ hasError: false })}
              >
                Try again?
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
