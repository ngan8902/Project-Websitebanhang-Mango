import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import ClientAxios from '../../utils/fetch.utils'
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
    const { poductId } = useParams()
    console.log(useParams());
    const [Product, setProduct] = useState([])
    const [thisProduct, setThisProduct] = useState([])
    const { productId } = useParams()
    // function showProducts() {
    //     ClientAxios.get(`/api/product/`)
    //         .then(res => {

    //             const { data} = res.data;
    //             // data nay la dat tren shopcontroller
    //             console.log(data)
    //             setProducts(data) 
    //             const Productdetail = Products.find(prod => prod.id === productId)  
    //             setThisProduct(Productdetail)


    //         })
    //         .catch(error => console.log(error));

    // }
    useEffect(() => {
        ClientAxios.get(`/api/product/getdetail?productId=${poductId}&test=123`).then(
            (res) => {
                const data = res.data.data
                const product = data[0];
                console.log(product)
                setProduct(product)
            }
        )
    }, [])

    const handleAddToCart = () => {
        ClientAxios.get(`/api/cart/addproduct?productId=${poductId}&customerId=123`).then(
            (res) => {
                console.log(res)
            }
        )
    }

    return (
        <>
            <div className="manshirt-header"></div>
            <IndexNavbar />
            <div className='productdetail' style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                <Container>
                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <img width="416vh" height="400px" src={Product.ImagePath} alt="Card image cap"></img>
                            {/* <img src={require('../../assets/img/product1.jpg')}> </img> */}
                        </Col>
                        <Col >
                            <h2 style={{ color: 'red' }}>Mã số: {Product.ProductID}</h2>
                            <h4>{Product.Name}</h4>
                            <div className='product-price' style={{
                                paddingTop: '8px', borderBottom: '1px solid gray',
                                borderTop: '1px solid gray', width: '200px'
                            }}>

                                <h4>{Product.Price}</h4>
                            </div>

                            <div className='product-dexcription' style={{ padding: '10px', minHeight: '170px' }}>
                                <h6>Description: </h6>
                                <p style={{ color: 'black' }}>
                                    {typeof Product.Description === 'string' ? Product.Description.split('.').map((text,index) => {
                                        return (
                                            <>
                                            
                                                <li key={index}>{text}</li>
                                            </>
                                        )

                                    }) : null}


                                    { }


                                </p>
                            </div>


                            <Button onClick={handleAddToCart} >Thêm vào giỏ hàng</Button>
                        </Col>
                        <Col>
                            <Row>
                                <Col sm="2" style={{ border: '1px solid #ddc4c4' }}>
                                    <i className="fa-solid fa-car-side fa-xl" style={{ lineHeight: '50px' }} />
                                </Col>
                                <Col style={{ border: '1px solid #ddc4c4' }}>

                                    <h6 style={{ paddingTop: '5px' }}> FREE SHIP</h6>
                                    <p style={{ color: 'black', marginTop: '-7px' }}>Sản phẩm tren 5.000.000 VND</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="2" style={{ border: '1px solid #ddc4c4' }}>
                                    <i className="fa-sharp fa-solid fa-cart-shopping" style={{ lineHeight: '50px' }} />
                                </Col>
                                <Col style={{ border: '1px solid #ddc4c4' }}>

                                    <h6 style={{ paddingTop: '5px' }}> ĐỔI TRẢ MIỄN PHÍ</h6>
                                    <p style={{ color: 'black', marginTop: '-7px' }}>Đổi trả miễn phí trong 90 ngày </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="2" style={{ border: '1px solid #ddc4c4' }}>
                                    <i className="fa-sharp fa-solid fa-cart-shopping" style={{ lineHeight: '50px' }} />
                                </Col>
                                <Col style={{ border: '1px solid #ddc4c4' }}>

                                    <h6 style={{ paddingTop: '5px' }}> THANH TOÁN</h6>
                                    <p style={{ color: 'black', marginTop: '-7px' }}>Thanh toán khi nhận hàng</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="2" style={{ border: '1px solid #ddc4c4' }}>
                                    <i className="fa-sharp fa-solid fa-cart-shopping" style={{ lineHeight: '50px' }} />
                                </Col>
                                <Col style={{ border: '1px solid #ddc4c4' }}>

                                    <h6 style={{ paddingTop: '5px' }}> HỖ TRỢ MUA NHANH </h6>
                                    <p style={{ color: 'red', marginTop: '-7px' }}>0935195087</p>
                                    <p style={{ color: 'gray', marginTop: '-7px' }}>From 8:00am to 9:00pm everyday</p>
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