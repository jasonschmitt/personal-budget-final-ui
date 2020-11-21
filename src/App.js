import React from 'react'
import { hot } from 'react-hot-loader'
import axios from 'axios'
import Login from './components/login/login'

class App extends React.Component {
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
    return (
      <div>
        <Login />
      </div>
    )
  }
}

const hotFunction = hot(module)
export default hotFunction(App)
