import React from 'react'
import axios from 'axios'
import './login.css'

class Login extends React.Component {
  state = {
    count: 0,
  }

  increment = () => {
    return this.setState((state) => ({ count: state.count + 1 }))
  }

  decrement = () => {
    return this.setState((state) => ({ count: state.count - 1 }))
  }

  getData = () => {
    axios.get('http://localhost:8081/contact').then(function (res) {
      console.log(res.data)
    })
  }

  render() {
    const { count } = this.state
    return (
      <div className="row">
        <h1 className="test-green bigBorder">hello world!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button className="col s6" onClick={this.increment}>
          +
        </button>
        <button className="col s6" onClick={this.decrement}>
          -
        </button>
        <button className="col s12" onClick={this.getData}>
          get data
        </button>
        <div className="card-panel purple darken-4">
          This is a card panel with a teal lighten-2 class
        </div>
      </div>
    )
  }
}

export default Login
