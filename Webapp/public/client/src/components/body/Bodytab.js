import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from "react-router-dom";
import {
    TabContent, TabPane, Nav,
    NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
import React, { useState } from 'react'


function Cardproductview(product) {
    return (
        <>
            <Col sm="3">

                <div >
                    <Card >
                        <CardImg top width="100%" src={product.src} alt="Card image cap" />
                        <div className='card-product'>

                            <CardBody >
                                <div className='card-content'>
                                    <CardTitle className='card-title '>MAN</CardTitle>
                                    <CardSubtitle className='card-title ' >Veston for Business</CardSubtitle>
                                    <CardText className='card-price card-text'>110 $</CardText>
                                    <Button tag={Link} to="/detailproduct-page">View</Button>
                                </div>

                            </CardBody>

                        </div>

                    </Card>
                </div>
            </Col>
        </>
    )

}
export { Cardproductview };
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
                                <Cardproductview src={require('../../assets/img/product1.jpg')} />
                                <Cardproductview src={require('../../assets/img/product2.jpg')} />
                                <Cardproductview src={require('../../assets/img/product3.jpg')} />
                                <Cardproductview src={require('../../assets/img/product4.jpg')} />



                            </Row>
                        </TabPane>
                        <TabPane tabId="2">

                            <Row>
                            <Cardproductview src={require('../../assets/img/product4.jpg')} />
                                <Cardproductview src={require('../../assets/img/product3.jpg')} />
                                <Cardproductview src={require('../../assets/img/product2.jpg')} />
                                <Cardproductview src={require('../../assets/img/product1.jpg')} />


                            </Row>

                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                            <Cardproductview src={require('../../assets/img/product2.jpg')} />
                                <Cardproductview src={require('../../assets/img/product1.jpg')} />
                                <Cardproductview src={require('../../assets/img/product3.jpg')} />
                                <Cardproductview src={require('../../assets/img/product4.jpg')} />


                            </Row>
                        </TabPane>
                    </TabContent>
                </div >

            </div>
        </div>
    )
}

