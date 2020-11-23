import React from 'react'

class Dashboard extends React.Component {
  render() {
    // console.log(this.props)
    const { user } = this.props
    return <div>dashboard page for {user}</div>
  }
}

export default Dashboard
