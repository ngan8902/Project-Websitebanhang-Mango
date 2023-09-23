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
import React from "react";
import classnames from "classnames";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
 import Message from './Message.js';
import { Link } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  CardTitle,
  CardFooter,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("payment-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps && ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("payment-page");
    };
  }, []);
  return (
    <>
    
      <Message/>
      <div className="wrapper">
                <section className="section" style={{backgroundColor:"#ffcacaa1"}}>
                  <div className="profile-title text-center" style={{color:"black "}}>
                    <div className="icon-payment" style={{fontSize: "57px",marginBottom: "-26px"}}>
                  <i className="fa-solid fa-credit-card fa-2xs"  />

                    </div>
                 
                  <h1 style={{color:"black "}} >
                  Payment</h1>
                  <p style={{marginTop:"-23px", color: "gray", marginBottom:"10px"}}>Please check the Customer and Cart information before placing an order.</p>

                  </div>

                
          <Container>
            <Row>

              <Col md="6">
                <h3 className="profile-title text-left" style={{marginBottom:"5px"}} >
                  Information of custome</h3>
                    <Form>
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue="Mike" type="text" />
                          </FormGroup>  
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="mike@email.com" type="email" />
                          </FormGroup>
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue="001-12321345" type="text" />
                          </FormGroup>
                        
                          <FormGroup>
                            <label>Address</label>
                            <Input defaultValue="CreativeTim" type="text" />
                          </FormGroup>
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Note" type="text" />
                          </FormGroup>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send 
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  {/* </CardBody>
                </Card> */}
              </Col>
              <Col className="ml-auto" md="4">
                <div className="card-payment-main">
                <Card className="card-payment">
                    <CardHeader>
                      <CardTitle tag="h4" style={{marginLeft:"2px",textAlign:"center",color:"white"}}>Card</CardTitle>
                    </CardHeader>
                    <CardBody>
                    <Row>
                    <Col sm="4">
                      <img width="100%" src={require('../../assets/img/product2.jpg')} alt="Card image cap"></img>
                    </Col>
                    <Col sm="8" style={{margin:"auto"}}>
                     
                      <h5>Veston for Business</h5>
                      <p>110 $</p>
                    
                     
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="4">
                      <img width="100%" src={require('../../assets/img/product3.jpg')} alt="Card image cap"></img>
                    </Col>
                    <Col sm="8" style={{margin:"auto"}}>
                     
                      <h5>Veston for Business</h5>
                      <p>110 $</p>
                    
                     
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="4">
                      <img width="100%" src={require('../../assets/img/product1.jpg')} alt="Card image cap"></img>
                    </Col>
                    <Col sm="8" style={{margin:"auto"}}>
                     
                      <h5>Veston for Business</h5>
                      <p>110 $</p>
                    
                     
                    </Col>
                    </Row>
                    </CardBody>
                    <CardFooter>
                      Total: 20 $
                    </CardFooter>
                  </Card>
                </div>
              
                {/* <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                      Bld Mihail Kogalniceanu, nr. 8, <br />
                      7652 Bucharest, <br />
                      Romania
                    </p>
                  </div>
                </div> */}
                {/* <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Michael Jordan <br />
                      +40 762 321 762 <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div> */}
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section className="section" style={{backgroundColor:"gray"}}>
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue="Mike" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="mike@email.com" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue="001-12321345" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input defaultValue="CreativeTim" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Hello there!" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                      Bld Mihail Kogalniceanu, nr. 8, <br />
                      7652 Bucharest, <br />
                      Romania
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Michael Jordan <br />
                      +40 762 321 762 <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        <Footer />
      </div>
    </>
  );
}
