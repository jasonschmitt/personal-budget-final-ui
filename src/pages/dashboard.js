import React from 'react'

class Dashboard extends React.Component {
  render() {
    const { user } = this.props.data.globalState

    return <div>dashboard page for {user.firstName}</div>
  }
}

export default Dashboard
