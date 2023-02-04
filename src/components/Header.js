import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.svg';
import {Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem, Button,
  Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();
  }


  render() {
    return (
      <Navbar expand='lg'>
        <LinkContainer to="/">
          <NavbarBrand className="ml-auto offset-1">
            <img src={Logo} alt="Little Lemon Restaurant" />
          </NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                <span className="fa fa-home fa-lg"></span> Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                <span className="fa fa-info fa-lg"></span> About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/menu" className="nav-link">
                <span className="fa fa-list fa-lg"></span> Menu
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/reservations" className="nav-link">
                <span className="fa fa-bell fa-lg"></span> Reservations
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/order" className="nav-link">
                <span className="fa fa-shopping-bag fa-lg"></span> Order Online
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Login
              </Button>
            </NavItem>
          </Nav>
        </Collapse>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember"
                    innerRef={(input) => this.remember = input} />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </Navbar>
    );
  };
}

export default Header;