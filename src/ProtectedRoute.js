import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component
    const isAuthenticated = localStorage.getItem('token')

    const isLoggedIn = this.props.isLoggedIn
    console.log(isLoggedIn)

    return isAuthenticated ? (
      <Component user={this.props.user} />
    ) : (
      <Redirect to={{ pathname: this.props.redirectLink }} />
    )
  }
}

export default ProtectedRoute
