import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    console.log(target)
    console.log(target.name)
    const name = target.name
    this.setState({ [name]: event.target.value })
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    alert(
      'A name was submitted: ' + this.state.email + ' ' + this.state.password
    )

    const dataObj = {
      email: this.state.email,
      password: this.state.password,
    }
    axios
      .post('http://localhost:8081/login', dataObj)
      .then(function (response) {
        console.log(response.data)
        console.log(response)
        localStorage.setItem('token', response.data.token)
        console.log(typeof response.data._id)
        localStorage.setItem('_id', response.data._id)
        window.location.href = '/dashboard'
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn
    if (isLoggedIn) {
      window.location.href = '/dashboard'
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    )
  }
}

export default Login
