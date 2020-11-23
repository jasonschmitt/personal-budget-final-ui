import React from 'react'
import { hot } from 'react-hot-loader'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
import Home from './pages/home'
import About from './pages/about'
import Signup from './pages/signup'
import Login from './pages/login'

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
    // axios.get('http://localhost:8081/contact').then(function (res) {
    //   console.log(res.data)
    // })
  }

  getData = () => {
    axios.get('http://localhost:8081/contact').then(function (res) {
      console.log(res.data)
    })
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

const hotFunction = hot(module)
export default hotFunction(App)
