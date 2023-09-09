

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

export default function IndexNavbar({authen}) {
 // console.log(authen)
 console.log(authen)
  //{id: 3, email: 'nhatanh@gmail.com'}
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
            <span style={{ border: "1px solid" }}>MANGO</span>

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
        {/* MENU CATEGORY */}
        <Nav navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              href="#pablo"
              nav
              onClick={(e) => e.preventDefault()}
            >
              MAN
            </DropdownToggle>
            <DropdownMenu className="dropdown-with-icons">
              <DropdownItem tag={Link} to="/manshirt-page">

                Shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                T-shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                Coat
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                Accessory
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              href="#pablo"
              nav
              onClick={(e) => e.preventDefault()}
            >

              WOMAN
            </DropdownToggle>
            <DropdownMenu className="dropdown-with-icons">
              <DropdownItem tag={Link} to="/manshirt-page">

                Shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                T-shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                Coat
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                Accessory
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              href="#pablo"
              nav
              onClick={(e) => e.preventDefault()}
            >

              KID
            </DropdownToggle>
            <DropdownMenu className="dropdown-with-icons">
              <DropdownItem tag={Link} to="/manshirt-page">

                Shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                T-shirt
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                Coat
              </DropdownItem>
              <DropdownItem tag={Link} to="/manshirt-page">

                Accessory
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

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

                style={{ padding: "30px" }}
              >
                <ModalHeader toggle={toggle} style={{ textAlign: "center", backgroundColor: "black", color: "white" }}>CARD SHOPPING</ModalHeader>
                <ModalBody>
                  <Row>
                    <Col sm="4">
                      <img width="100%" src={require('../../assets/img/product1.jpg')} alt="Card image cap"></img>
                    </Col>
                    <Col sm="4" style={{ margin: "auto" }}>

                      <h5>Veston for Business</h5>
                      <p>110 $</p>


                    </Col>
                    <Col sm="4" style={{ margin: "auto" }}>
                      <Button color='danger'>Delete</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="4">
                      <img width="100%" src={require('../../assets/img/product3.jpg')} alt="Card image cap"></img>
                    </Col>
                    <Col sm="4" style={{ margin: "auto" }}>

                      <h5>Veston for Business</h5>
                      <p>125 $</p>


                    </Col>
                    <Col sm="4" style={{ margin: "auto" }}>
                      <Button color='danger'>Delete</Button>
                    </Col>
                  </Row>

                </ModalBody>
                <ModalFooter>
                  <Button color="success" tag={Link} to="/profile-page">
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
                <DropdownItem tag={Link} to="/">
                  <i className="tim-icons icon-bullet-list-67" />
                  Home Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                  <i className="tim-icons icon-bullet-list-67" />
                  Register Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/login-page">
                  <i className="tim-icons icon-image-02" />
                  Login Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                  <i className="tim-icons icon-single-02" />
                  Payment Page
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="p-0">
            
       {authen && (
        <div>
          Hello {authen.Id !== undefined ||authen.Id !== null ? (<p>{authen.email}</p>): (<p>Vo danh</p>)}
        </div>
       )} 
            </NavItem>
            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>


  );
}

