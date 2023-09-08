// react plugin used to create charts
import { Line } from "react-chartjs-2";
import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
import Message from './Message.js';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  CardImg,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Navbar,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";
import ClientAxios from '../../utils/fetch.utils.js'

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

export default function LandingPage() {
  const [squares1to6, setSquares1to6] = React.useState([]);
  const [squares7and8, setSquares7and8] = React.useState([]);
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [customer, setCustomer] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);

  const onHandleLogin = (e) => {
    e.preventDefault()
    ClientAxios.post('/api/customer/login', {
      ...customer
      
    }).then((response) => {
      console.log(response)
      //email, full name, password, token


      const { data } = response.data
      const { token } = data
      ClientAxios.defaults.headers.common['authorization'] = token;
      navigate('/components')
    })
  }

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)"
    );
  };
  return (
    <>
      <IndexNavbar />
      <Message />
      <div className="wrapper">
        <div className="page-header" style={{
          backgroundImage:
            'url("https://ongnhuahdpevietnam.com/wp-content/uploads/2022/08/hinh-nen-trang-2k-1536x864.jpg")',
          backgroundSize: "contain"
        }}>

          <div className="page-header-image" />
          <div className="content"  >
            <Container >
              <Row>
                <Col>

                  <img src={require('../../assets/img/login2.jpg')} alt="" />
                  <h1 style={{ marginTop: "20px" }}> Join Our Company</h1>
                  <h4>You will have the opportunity to receive many great deals</h4>
                </Col>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4" style={{ marginLeft: "2px", textAlign: "center", color: "white" }}>
                        Login</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        {/* <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Full Name"
                            type="text"
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                          />
                        </InputGroup> */}
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email" style={{ color: "black" }}
                            value={customer.email}
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            onChange={e => setCustomer({
                              ...customer,
                              email: e.target.value
                            })}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password" style={{ color: "black" }}
                            value={customer.password}
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                            onChange={e => setCustomer({
                              ...customer,
                              password: e.target.value
                            })}
                          />
                        </InputGroup>
                        <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup>
                      </Form>

                    </CardBody>
                    <CardFooter>

                      <Button className="btn-round" 
                        color="primary" size="lg" 
                        onClick={onHandleLogin}>
                        Get Started
                      </Button>
                      <NavLink tag={Link} to="/register-page">
                        Don't have an account ?  Sign up
                      </NavLink>
                    </CardFooter>
                  </Card>


                </Col>


              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
