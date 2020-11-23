import Axios from 'axios'
import React from 'react'
import axios from 'axios'

class Account extends React.Component {
  state = {
    user: '',
  }
  componentDidMount() {
    console.log('account mounted')
    // axios.get('http://localhost:8081/contact').then(function (res) {
    //   console.log(res.data)
    // })
  }

  fetchData() {
    console.log('fetching')
    const token = localStorage.getItem('token')
    let user_id = localStorage.getItem('_id')
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `JWT ${token}`,
    }

    console.log(`typeof ${typeof user_id}`)
    console.log(`http://localhost:8081/user/${user_id}`)
    axios
      .get(`http://localhost:8081/user/${user_id}`, {
        headers: headers,
      })
      .then(function (response) {
        console.log(response.data)
        // setState user to response back from api to get data about the user to use in other components
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    console.log('this.state.props')
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
