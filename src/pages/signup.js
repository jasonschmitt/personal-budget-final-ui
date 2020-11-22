import React from 'react'

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          another:
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
