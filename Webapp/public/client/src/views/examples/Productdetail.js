import React from 'react';
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import {
    CardText,
    CardSubtitle,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Sidebar,
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
function Productdetail() {
    return (
        <>
            <div className="manshirt-header"></div>
            <IndexNavbar />
            <div className='productdetail' style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <Container>
                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <img width="416vh" height="400px" src={require('../../assets/img/product1.jpg')} alt="Card image cap"></img>
                            {/* <img src={require('../../assets/img/product1.jpg')}> </img> */}
                        </Col>
                        <Col >
                            <h2 style={{ color: 'red' }}>Code: 01</h2>
                            <h2>Vestons</h2>
                            <div className='product-price' style={{
                                paddingTop: '8px', borderBottom: '1px solid gray',
                                borderTop: '1px solid gray', width: '200px'
                            }}>

                                <h4>$100</h4>
                            </div>

                            <div className='product-dexcription' style={{ padding: '10px', minHeight: '170px' }}>
                                <h6>Description: </h6>
                                <p style={{ color: 'black' }}>Beautiful, nice....

                                </p>
                            </div>





                            <Button tag={Link} to="/profile-page">Add to card </Button>
                        </Col>
                        <Col>
                            <Row>
                                <Col sm="2" style={{border:'1px solid #ddc4c4'}}>
                            <i className="fa-solid fa-car-side fa-xl" style={{lineHeight: '50px'}} />
                                </Col>
                                <Col style={{border:'1px solid #ddc4c4'}}>

                                  <h6 style={{paddingTop: '5px'}}> FREE SHIP</h6> 
                                  <p style={{color:'black', marginTop:'-7px'}}>San pham tren 600$</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="2" style={{border:'1px solid #ddc4c4'}}>
                                    <i className="fa-sharp fa-solid fa-cart-shopping" style={{lineHeight: '50px'}} />
                                </Col>
                                <Col style={{border:'1px solid #ddc4c4'}}>

                                  <h6 style={{paddingTop: '5px'}}> ĐỔI TRẢ MIỄN PHÍ</h6> 
                                  <p style={{color:'black', marginTop:'-7px'}}>Đổi trả miễn phí trong 90 ngày </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="2" style={{border:'1px solid #ddc4c4'}}>
                                    <i className="fa-sharp fa-solid fa-cart-shopping" style={{lineHeight: '50px'}} />
                                </Col>
                                <Col style={{border:'1px solid #ddc4c4'}}>

                                  <h6 style={{paddingTop: '5px'}}> Thanh TOÁN</h6> 
                                  <p style={{color:'black', marginTop:'-7px'}}>Thanh toán khi nhận hàng</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="2" style={{border:'1px solid #ddc4c4'}}>
                                    <i className="fa-sharp fa-solid fa-cart-shopping" style={{lineHeight: '50px'}} />
                                </Col>
                                <Col style={{border:'1px solid #ddc4c4'}}>

                                  <h6 style={{paddingTop: '5px'}}> HỖ TRỢ MUA NHANH </h6> 
                                  <p style={{color:'red', marginTop:'-7px'}}>0935195087</p>
                                  <p style={{color:'gray', marginTop:'-7px'}}>From 8:00am to 9:00pm everyday</p>
                                </Col>
                            </Row>

                        </Col>

                    </Row>



                </Container>
            </div>
            <Footer />
        </>
    )
}
export default Productdetail;