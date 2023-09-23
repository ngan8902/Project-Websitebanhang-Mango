import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardColumns
} from 'reactstrap';




export default function BodyCard() {
    return (
        <div className="bodycard">

            <CardDeck margin-left="20px">
                <Card  style={{ borderRadius: "5%" }}>
                  
                    <CardBody className='cardimg img1'>
                       <div className='cardtext'> 
                       <CardTitle>his & fashion</CardTitle>
                        
                        <Button style={{letterSpacing: 4}}>Shop now</Button>
                       </div>

                        
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: "5%" }}>
                  
                  <CardBody className='cardimg img2'>
                     <div className='cardtext'> 
                     <CardTitle>her & fashion</CardTitle>
                      
                      <Button style={{letterSpacing: 4}}>Shop now</Button>
                     </div>

                      
                  </CardBody>
              </Card>
              <Card style={{ borderRadius: "5%" }}>
                  
                  <CardBody className='cardimg img3'>
                     <div className='cardtext'> 
                     <CardTitle>kid & fashion</CardTitle>
                      
                      <Button style={{letterSpacing: 4}}>Shop now</Button>
                     </div>

                      
                  </CardBody>
              </Card>
              
            </CardDeck>

        </div>
    )
}