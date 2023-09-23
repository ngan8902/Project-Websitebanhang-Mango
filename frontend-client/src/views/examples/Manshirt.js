import React, { useState, useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import axios from 'axios';
import ClientAxios from '../../utils/fetch.utils'
//import {SiderbarMenu} from "views/examples/Manshirt.js";
import { Link, useNavigate } from "react-router-dom";
import { ROOT_URL } from "../../variables/constant"
import Productdetail from "./Productdetail.js";

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
function Cardproduct(product) {
    return (
        <>
            <Col>
                <Card >
                    <CardImg top width="100%" src={product.src} alt="Card image cap" />
                    <div className='card-product'>

                        <CardBody >
                            <div className='card-content'>
                                <CardTitle className='card-title '>MAN</CardTitle>
                                <CardSubtitle className='card-title ' >Veston for Business</CardSubtitle>
                                <CardText className='card-price card-text'>110 $</CardText>
                                <Button>Add to card </Button>
                            </div>

                        </CardBody>

                    </div>

                </Card>
            </Col>
        </>
    )
}
function SiderbarMenu() {
    return (
        <>
            <ul>
                MAN
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Shirt
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        T-Shirt
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Coat
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Acessory
                    </NavLink>
                </li>

            </ul>
            <ul>
                WOMAN
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Shirt
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        T-Shirt
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Coat
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Acessory
                    </NavLink>
                </li>

            </ul>
            <ul>
                KID
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Shirt
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        T-Shirt
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Coat
                    </NavLink>
                </li>
                <li   >
                    <NavLink to="/manshirt-page" tag={Link}>
                        Acessory
                    </NavLink>
                </li>

            </ul>
        </>
    )
}
function Productrow() {
    return (
        <>

            <Cardproduct src={require('../../assets/img/product1.jpg')} />
            <Cardproduct src={require('../../assets/img/product2.jpg')} />
            <Cardproduct src={require('../../assets/img/product3.jpg')} />
            <Cardproduct src={require('../../assets/img/product4.jpg')} />




        </>
    )
}

function Manshirt() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()
    function showProducts() {
        ClientAxios.get(`/api/product/`)
            .then(res => {

                const { data } = res.data;
                // data nay la dat tren shopcontroller
                console.log(data)
                setProducts(data)


            })
            .catch(error => console.log(error));
      

    }
    useEffect(() => {
        showProducts()
       
        return () => {

        }
    }, [])

    const handleProductId = (productId) => {
       
        if(productId>1){
            return(
                <>
                <h3>Hello</h3>
                </>
            )

        }
       
    }

    return (
        <>
            <div className="manshirt-header"></div>
            <IndexNavbar />
            <div className="Manshirt" >

                <Container>
                    <h3 > SHIRT </h3>
                    <img src={require('../../assets/img/banner-manshirt.jpg')} className="imgbanner" ></img>
                    <h2 style={{ textAlign: 'center', padding: '10px' }}>CÁC SẢN PHẨM</h2>
                    <Row>
                        <Col sm="3" className="sidebarmenu">
                            <SiderbarMenu />
                        </Col>
                        <Col sm="9">
                            <Row>
                                {(products.length > 0) && products.map((product, index) => {
                                        return (

                                            <Col key={product.ProductID}>
                                                  { handleProductId(product.ProductID) }
                                                <Card >
                                                    <CardImg top width="500" height="300" src={product.ImagePath} alt="Card image cap" />
                                                    <div className='card-product'>
                                                      
                                                        <CardBody >
                                                            <div className='card-content'>
                                                                <CardTitle className='card-title ' style={{    fontFamily: '"Poppins", sans-serif'}}>{product.cate_name}</CardTitle>
                                                                <CardSubtitle className='card-title 'style={{letterSpacing: '0.25px'}} >{product.Name}</CardSubtitle>
                                                                <CardText className='card-price card-text'>{product.Price}</CardText>
                                                                <Button onClick={() => { navigate(`/detailproduct-page/${product.ProductID}`) }} >VIEW  </Button>
                                                              
                                                            </div>


                                                        </CardBody>

                                                    </div>

                                                </Card>
                                            </Col>
                                        )

                                    })
                               

                                }
                                {/* <Productrow /> */}


                            </Row>
                            <Row>
                                {/* <Productrow /> */}

                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer />
        </>

    )
}
export default Manshirt
export { SiderbarMenu, Productrow, Cardproduct };