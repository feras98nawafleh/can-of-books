import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Login from "./components/Login"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BestBooks from "./components/BestBooks"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <BestBooks />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Login">
              <Login onLogin={this.loginHandler} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App
