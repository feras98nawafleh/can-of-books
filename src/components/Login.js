import React from "react"
import Card from "react-bootstrap/Card"
import "../components/Login.css"
import LoginButton from "../components/LoginButton"
import "./Login.css"

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>Click Below to Log In</Card.Text>
          <LoginButton onLogin={this.props.onLogin} />
        </Card.Body>
      </Card>
    )
  }
}

export default Login
