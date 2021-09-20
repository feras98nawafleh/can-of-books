import React from "react"
import LogoutButton from "./LogoutButton"
import { Navbar, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../Header.css"
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Profile" className="nav-link">
            Profile
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Login" className="nav-link">
            Login
          </Link>
        </NavItem>
        <LogoutButton onLogout={this.props.onLogout} />
      </Navbar>
    )
  }
}

export default Header
