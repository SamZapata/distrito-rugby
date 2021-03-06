import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import '../../styles/header.css';
// import Scrollmenu from '../base/ScrollmenuComponent';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render(){
    return(
      <div className = "header-wrap">
        <Navbar expand="md">
          <Nav navbar>
            <NavItem>
              <a onClick={this.toggleModal} className="button">
                <img src='images/share/dr-header-2021.svg' height="30" alt='Distrito Rugby' />
              </a>
            </NavItem>
          </Nav>
        </Navbar>
        {/* <Scrollmenu /> */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}><a href="/home" className="text-dark">Distrito Rugby</a></ModalHeader>
          <ModalBody>
            <Button className="menu-button">
              <a href="/clubes">CLUBES</a>
            </Button>
            <Button className="menu-button">
              <a href="/players">JUGADORES</a>
            </Button>
            <Button className="menu-button">
              <a href="/stories" >HISTORIAS</a>
            </Button>
          </ModalBody>
          <ModalFooter>
            <span className="fa fa-instagram fa-lg"></span>
            <span className="fa fa-facebook fa-lg"></span>
            <span className="fa fa-twitter fa-lg"></span>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Header;
