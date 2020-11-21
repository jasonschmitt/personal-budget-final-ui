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
      <div>
        <h1 className="test-green bigBorder">hello world!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.getData}>get data</button>
      </div>
    )
  }
}

export default Login
