import Axios from 'axios'
import React from 'react'
import axios from 'axios'

class Account extends React.Component {
  componentDidMount() {
    console.log('account mounted')
    // axios.get('http://localhost:8081/contact').then(function (res) {
    //   console.log(res.data)
    // })
  }

  fetchData() {
    console.log('fetching')
  }
  render() {
    return (
      <div>
        <div>show users about their account</div>
        <div>have them be able to update their settings here</div>
        <button onClick={this.fetchData}>click here for data</button>
      </div>
    )
  }
}

export default Account
