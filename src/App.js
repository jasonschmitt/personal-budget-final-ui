import React from 'react'
import { hot } from 'react-hot-loader'
import axios from 'axios'
import Login from './components/login/login'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
import Signup from './components/signup/signup'

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

  componentDidMount() {
    console.log('it mounted')
    axios.get('http://localhost:8081/contact').then(function (res) {
      console.log(res.data)
    })
  }

  getData = () => {
    axios.get('http://localhost:8081/contact').then(function (res) {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Signup />
        <i className="large material-icons">account_balance_wallet</i>
        <Login />
        <Footer />
      </div>
    )
  }
}

const hotFunction = hot(module)
export default hotFunction(App)
