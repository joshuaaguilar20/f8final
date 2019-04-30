/*eslint-disable*/
import React from "react";


// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="javascript:void(0)"> 2019 Hackathon F8  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">Blog</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()}


          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
