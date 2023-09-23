import React from "react";
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
// core components
import axios from 'axios';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import Bodytab from "components/body/Bodytab.js";
import BodyCard from "components/body/BodyCard.js";
// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import ClientAxios from '../utils/fetch.utils'
import { useState,useEffect } from "react";
export default function Index() {
  var reactListDiv = document.querySelector('.list');
  const [products, setProducts] = useState([]);
const [customerAuthen, setCustomerAuthen] = useState({
  Id: '',
  emai: ''
})
if (reactListDiv) {
    reactListDiv.remove();
}
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
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:    // call to check user
    ClientAxios.get('/api/customer/authen').then((response) => {
      const data =response.data;
     setCustomerAuthen({Id: data.customerId,email: data.customerEmail})
    
    })
   
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
 
   
  return (
    <>
      <IndexNavbar authen={customerAuthen}/>
     {/* // <IndexNavbar  authen={customerAuthen}/> */}
      <div className="wrapper">
        <PageHeader />
        <div className="main">
         
          {/* <Basics />
          <Navbars />
  <Tabs />*/}
          
          <BodyCard />
          <Bodytab products={products}/>

           {/* <Pagination />  
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          <Download />  */}

        </div>
        <Footer />
      </div>
    </>
  );
}
