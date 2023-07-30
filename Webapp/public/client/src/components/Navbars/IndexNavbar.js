/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



// reactstrap components
import {

  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  // const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>MINA </span>

          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Creative Tim
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>

            </Row>
          </div>
          <Nav navbar>

            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"

                onClick={toggle}
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa-sharp fa-solid fa-cart-shopping" />

              </NavLink>
            </NavItem>

            {/* Modalheader */}
            <div className="modalheader">
              <Modal
                isOpen={modal}
                modalTransition={{ timeout: 700 }}
                backdropTransition={{ timeout: 1300 }}
                toggle={toggle}
style={{padding:"30px"}}
              >
                <ModalHeader toggle={toggle} style={{ textAlign: "center", backgroundColor: "black", color: "white" }}>CARD SHOPPING</ModalHeader>
                <ModalBody>
                  <Row>
                    <Col sm="4">
                      <img width="100%" src={require('../../assets/img/product1.jpg')} alt="Card image cap"></img>
                    </Col>
                    <Col sm="4" style={{margin:"auto"}}>
                     
                      <h5>Veston for Business</h5>
                      <p>110 $</p>
                    
                     
                    </Col>
                    <Col sm="4" style={{margin:"auto"}}>
                      <Button color='danger'>Delete</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <img width="100%" src={require('../../assets/img/product3.jpg')} alt="Card image cap"></img>
                    </Col>
                    <Col sm="4" style={{margin:"auto"}}>
                     
                      <h5>Veston for Business</h5>
                      <p>125 $</p>
                    
                     
                    </Col>
                    <Col sm="4" style={{margin:"auto"}}>
                      <Button color='danger'>Delete</Button>
                    </Col>
                  </Row>

                </ModalBody>
                <ModalFooter>
                  <Button color="success" onClick={toggle}>
                    Payment
                  </Button>{' '}
                  <Button color="danger" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Menu
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/register-page">
                  <i className="tim-icons icon-bullet-list-67" />
                  Register Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                  <i className="tim-icons icon-image-02" />
                  Landing Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                  <i className="tim-icons icon-single-02" />
                  Profile Page
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-user-archive-index-navbar-upgrade-pro"
              >
                <i className="tim-icons icon-spaceship" /> Upgrade to PRO
              </Button>
            </NavItem> */}
            {/* <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={scrollToDownload}
              >
                <i className="tim-icons icon-cloud-download-93" /> Download
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>


  );
}

