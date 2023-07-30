import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
    TabContent, TabPane, Nav,
    NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
import React, { useState } from 'react'

export default function Bodytab() {

    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    // Toggle active state for Tab
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <div >
            <div className="content">
                <div className='content-text'>
                    <h2 className="title">
                        TRENDY CLOTHING
                    </h2>
                    
                </div>




                <div style={{
                    display: 'block', padding: 30
                }}>

                    <Nav tabs>
                        <NavItem className='nav-link'>
                            <NavLink
                                className={classnames({
                                    active:
                                        currentActiveTab === '1'
                                })}
                                onClick={() => { toggle('1'); }}
                            >
                                New
                            </NavLink>
                        </NavItem>
                        <NavItem className='nav-link'>
                            <NavLink
                                className={classnames({
                                    active:
                                        currentActiveTab === '2'
                                })}
                                onClick={() => { toggle('2'); }}
                            >
                                Classic
                            </NavLink>
                        </NavItem>
                        <NavItem className='nav-link'>
                            <NavLink
                                className={classnames({
                                    active:
                                        currentActiveTab === '3'
                                })}
                                onClick={() => { toggle('3'); }}
                            >
                                Old
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={currentActiveTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product1.jpg')} alt="Card image cap" />
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
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product2.jpg')} alt="Card image cap" />
                                            <div className='card-product'>
                                           
                                            <CardBody >
                                            <div className='card-content'>
                                                <CardTitle className='card-title '>WOMEN</CardTitle>
                                                <CardSubtitle className='card-title ' >Veston for Business</CardSubtitle>
                                                <CardText className='card-price card-text'>120 $</CardText>
                                                <Button>Add to card </Button>
                                                </div>
                                               
                                            </CardBody>
                                            
                                            </div>
                                          
                                        </Card>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product3.jpg')} alt="Card image cap" />
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
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product4.jpg')} alt="Card image cap" />
                                            <div className='card-product'>
                                           
                                            <CardBody >
                                            <div className='card-content'>
                                                <CardTitle className='card-title '>WOMAN</CardTitle>
                                                <CardSubtitle className='card-title ' >Shirt for Business</CardSubtitle>
                                                <CardText className='card-price card-text'>125 $</CardText>
                                                <Button>Add to card </Button>
                                                </div>
                                               
                                            </CardBody>
                                            
                                            </div>
                                          
                                        </Card>
                                    </div>
                                </Col>
                                
                                
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                           
                            <Row>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product4.jpg')} alt="Card image cap" />
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
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product3.jpg')} alt="Card image cap" />
                                            <div className='card-product'>
                                           
                                            <CardBody >
                                            <div className='card-content'>
                                                <CardTitle className='card-title '>WOMEN</CardTitle>
                                                <CardSubtitle className='card-title ' >Veston for Business</CardSubtitle>
                                                <CardText className='card-price card-text'>120 $</CardText>
                                                <Button>Add to card </Button>
                                                </div>
                                               
                                            </CardBody>
                                            
                                            </div>
                                          
                                        </Card>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product2.jpg')} alt="Card image cap" />
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
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product1.jpg')} alt="Card image cap" />
                                            <div className='card-product'>
                                           
                                            <CardBody >
                                            <div className='card-content'>
                                                <CardTitle className='card-title '>WOMAN</CardTitle>
                                                <CardSubtitle className='card-title ' >Shirt for Business</CardSubtitle>
                                                <CardText className='card-price card-text'>125 $</CardText>
                                                <Button>Add to card </Button>
                                                </div>
                                               
                                            </CardBody>
                                            
                                            </div>
                                          
                                        </Card>
                                    </div>
                                </Col>
                                
                                
                            </Row>
                            
                        </TabPane>
                        <TabPane tabId="3">
                        <Row>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product1.jpg')} alt="Card image cap" />
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
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product2.jpg')} alt="Card image cap" />
                                            <div className='card-product'>
                                           
                                            <CardBody >
                                            <div className='card-content'>
                                                <CardTitle className='card-title '>WOMEN</CardTitle>
                                                <CardSubtitle className='card-title ' >Veston for Business</CardSubtitle>
                                                <CardText className='card-price card-text'>120 $</CardText>
                                                <Button>Add to card </Button>
                                                </div>
                                               
                                            </CardBody>
                                            
                                            </div>
                                          
                                        </Card>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product3.jpg')} alt="Card image cap" />
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
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div >
                                        <Card >
                                            <CardImg top width="100%" src={require('../../assets/img/product4.jpg')} alt="Card image cap" />
                                            <div className='card-product'>
                                           
                                            <CardBody >
                                            <div className='card-content'>
                                                <CardTitle className='card-title '>WOMAN</CardTitle>
                                                <CardSubtitle className='card-title ' >Shirt for Business</CardSubtitle>
                                                <CardText className='card-price card-text'>125 $</CardText>
                                                <Button>Add to card </Button>
                                                </div>
                                               
                                            </CardBody>
                                            
                                            </div>
                                          
                                        </Card>
                                    </div>
                                </Col>
                                
                                
                            </Row>
                        </TabPane>
                    </TabContent>
                </div >

            </div>
        </div>
    )
}

