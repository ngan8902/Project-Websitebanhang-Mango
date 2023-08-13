import React, { useState } from "react";
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
  Box,
  ChildModal,
  Modal
} from "reactstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
 
  MDBTextArea,
  MDBCardFooter,
  MDBIcon
} from "mdb-react-ui-kit";

export default function Message() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
      <a onClick={openModal}
      > <i className=" icon-message fa-solid fa-message "></i></a>

      <div className="modal-message">
        <Modal
          isOpen={modalIsOpen} //if true hien ra modal
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="customModal"
          contentLabel="Example Modal"
         
        ><MDBCard id="chat1" style={{ borderRadius: "15px",marginBottom:'0px' }}>
          <MDBCardHeader style={{backgroundColor:'#f14d85'}}>
          <Row style={{ marginLeft: "20px", marginTop: "10px" }}>
            <Col sm="1"><i className="fa-solid fa-user"></i> </Col>
            <Col sm="8">
              <Row>
                <Col sm="5">  <h4 className="nameuser-chat" style={{color:'black'}}>Jonan</h4></Col>
                <div className="icon-chat">
                  <Row>
                    <Col sm="1"> <i className="fa-solid fa-phone"></i></Col>
                    <Col sm="1"><i className="fa-solid fa-video"></i></Col>
                  </Row>

                </div>

              </Row>

            </Col>
            <Col sm="2">
              <button onClick={closeModal} className="buttonclose-chat">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </Col>
          </Row>
        </MDBCardHeader>
          

          <MDBCardBody>
          <div className="content-chat">
            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(57, 192, 237,.2)",
                }}
              >
                <p className="small mb-0" style={{ color: 'black' }}>
                  Hello and thank you for visiting MDBootstrap. Please click
                  the video below.
                </p>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-end mb-4">
              <div
                className="p-3 me-3 border"
                style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
              >
                <p className="small mb-0" style={{ color: 'black' }}>
                  Thank you, I really like your product.
                </p>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "100%" }}
              />
            </div>

            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "100%" }}
              />
              <div className="ms-3" style={{ borderRadius: "15px" }}>
                <div className="bg-image">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                    style={{ borderRadius: "15px" }}
                    alt="video"
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(57, 192, 237,.2)",
                }}
              >
                <p className="small mb-0" style={{ color: 'black' }}>...</p>
              </div>
            </div>

            {/* <Row className="content-text-chat">
                            <Col sm="1">
                                <i className="fa-solid fa-hippo  fa-xl"></i>
                            </Col>
                            <Col sm="10">
                                <input />
                            </Col>
                        </Row>
                        <Row style={{ textAlign: "left" }} className="contentchat-my content-text-chat">
                            <div className="contentchat-text-my">
                                <Col sm="10" >
                                    <input />
                                </Col>
                            </div>

                            <Col sm="1" >
                                <i className=" fa-solid fa-otter fa-xl"></i>
                            </Col>

                        </Row> */}

          </div>
         
          {/* mau  */}
          {/* <MDBContainer > */}
          {/* <MDBRow className="d-flex justify-content-center"> */}
          {/* <MDBCol md="8" lg="6" xl="4">
          <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
            <MDBCardHeader
              className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              <MDBIcon fas icon="angle-left" />
              <p className="mb-0 fw-bold">Live chat</p>
              <MDBIcon fas icon="times" />
            </MDBCardHeader>

            <MDBCardBody>
              <div className="d-flex flex-row justify-content-start mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }}
                />
                <div
                  className="p-3 ms-3"
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "rgba(57, 192, 237,.2)",
                  }}
                >
                  <p className="small mb-0">
                    Hello and thank you for visiting MDBootstrap. Please click
                    the video below.
                  </p>
                </div>
              </div>

              <div className="d-flex flex-row justify-content-end mb-4">
                <div
                  className="p-3 me-3 border"
                  style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
                >
                  <p className="small mb-0">
                    Thank you, I really like your product.
                  </p>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }}
                />
              </div>

              <div className="d-flex flex-row justify-content-start mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }}
                />
                <div className="ms-3" style={{ borderRadius: "15px" }}>
                  <div className="bg-image">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                      style={{ borderRadius: "15px" }}
                      alt="video"
                    />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row justify-content-start mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }}
                />
                <div
                  className="p-3 ms-3"
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "rgba(57, 192, 237,.2)",
                  }}
                >
                  <p className="small mb-0">...</p>
                </div>
              </div>

              <MDBTextArea
                className="form-outline"
                label="Type your message"
                id="textAreaExample"
                rows={4}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}
          {/* </MDBRow> */}
          {/* </MDBContainer> */}
          <MDBCardFooter className="text-muted d-flex 
          justify-content-start align-items-center ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 3"
                style={{ width: "45px", height: "100%",padding:'0px' }}
              />
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
              ></input>
              <a className="ms-1 text-muted" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <a className="ms-3 text-muted" href="#!">
                <MDBIcon fas icon="smile" />
              </a>
              <a className="ms-3" href="#!">
              <button type="submit" className="buttonsend-chat">
                  <i className="fa-solid fa-paper-plane fa-xl"></i>
                </button>
              </a>
            </MDBCardFooter>
          {/* <form>
            <Row style={{ textAlign: "center" }}>
              <Col sm="8">
                 <MDBTextArea
                className="form-outline"
                label="Type your message"
                id="textAreaExample"
                rows={4}
              /> </Col>

              <Col sm="4">
                <button type="submit" className="buttonsend-chat">
                  <i className="fa-solid fa-paper-plane fa-xl"></i>
                </button>
              </Col>
            </Row>
          </form> */}
          </MDBCardBody>
          </MDBCard>
        </Modal>
      </div>


    </>



  );
}
