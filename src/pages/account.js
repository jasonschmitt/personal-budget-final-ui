import React from 'react'

class Account extends React.Component {
  render() {
    console.log('this.state.props')
    return (
      <div>
        <div>show users about their account</div>
        <div>have them be able to update their settings here</div>
      </div>
    )
  }
}

export default Account
