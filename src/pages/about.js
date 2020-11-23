import React from 'react'

class About extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    console.log(token)
    if (!token) {
      console.log('redirect this user has no')
    }
  }
  render() {
    return <div>about page</div>
  }
}

export default About
