import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    const footerStyle = {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '60px',   /* Height of the footer */
      background: '#6cf',
    }
    return (
      <Navbar style={footerStyle} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
