import React from 'react'
import { hot } from 'react-hot-loader'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Account from './pages/account'
import Logout from './pages/logout'
import ProtectedRoute from './ProtectedRoute'

class App extends React.Component {
  state = {
    count: 0,
    isLoggedIn: false,
    user: {},
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
    this.checkLoggedInStatus()
  }

  checkLoggedInStatus() {
    const isAuthenticated = localStorage.getItem('token')
    if (isAuthenticated) {
      this.setState({ isLoggedIn: true })
      const token = localStorage.getItem('token')
      const user_id = localStorage.getItem('_id')

      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `JWT ${token}`,
      }

      axios
        .get(`http://localhost:8081/user/${user_id}`, {
          headers: headers,
        })
        .then((response) => {
          // console.log(response.data)
          this.setState({ user: response.data })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  getData = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Router>
        <button onClick={this.getData}>get the state</button>
        {this.state.isLoggedIn ? (
          <div>is logged in: true</div>
        ) : (
          <div>is logged in: false</div>
        )}

        <Nav isLoggedIn={this.state.isLoggedIn} />
        <Switch>
          <ProtectedRoute
            exact={true}
            path="/dashboard"
            redirectLink="/login"
            globalState={this.state}
            component={Dashboard}
          />
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login isLoggedIn={this.state.isLoggedIn} />
          </Route>
          <ProtectedRoute
            exact={true}
            path="/account"
            redirectLink="/login"
            isLoggedIn={this.state.isLoggedIn}
            globalState={this.state}
            component={Account}
          />
          <ProtectedRoute
            exact={true}
            path="/logout"
            redirectLink="/login"
            isLoggedIn={this.state.isLoggedIn}
            component={Logout}
          />
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
