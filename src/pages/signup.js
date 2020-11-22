import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firstName: '', lastName: '' }

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
    alert(
      'A name was submitted: ' +
        this.state.firstName +
        ' ' +
        this.state.lastName
    )
    event.preventDefault()

    const dataObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }
    axios
      .post('http://localhost:8081/contact', dataObj)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
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

export default Signup
