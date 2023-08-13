import React from "react";
import { useState } from "react";
import logo from "Backgr-pink.svg";
import PhoneInput from 'react-phone-input-2'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function User() {
  const [phonenumber, setPhonenumber] = useState('')
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={logo} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#bn">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/kid-design.png")}
                    />
                    {/* <div class="image-upload">
                      <label for="file-input">
                        <img src={camera}/>
                      </label>
                      <input id="file-input" type="file" />
                    </div> */}
                    <h5 className="title">Bích Ngân</h5>
                  </a>
                  <p className="description">@bichngan</p>
                </div>
                <p className="description text-center">
                  "Hi!"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12 <br />
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        2GB <br />
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <h5>
                        24,6$ <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Chỉnh sửa thông tin</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Công ty (không được sửa)</label>
                        <Input
                          defaultValue="Mango Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Tên người dùng</label>
                        <Input
                          defaultValue="bichngan8902"
                          placeholder="Tên người dùng"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Địa Chỉ Email
                        </label>
                        <Input placeholder="Email@gmail.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Họ</label>
                        <Input
                          defaultValue="Nguyễn"
                          placeholder="Họ"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Tên</label>
                        <Input
                          defaultValue="Ngân"
                          placeholder="Tên"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Địa chỉ</label>
                        <Input
                          defaultValue="11/3Abis Đ.NVQ P.ĐHT Q.12"
                          placeholder="Địa chỉ nhà"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Thành Phố</label>
                        <Input
                          defaultValue="Hồ Chí Minh"
                          placeholder="Thành Phố"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Quốc Gia</label>
                        <Input
                          defaultValue="Việt Nam"
                          placeholder="Quốc Gia"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <PhoneInput className="phone-input"
                          placeholder="Nhập số điện thoại"
                          country={'VN'}
                          value={phonenumber}
                          onChange={setPhonenumber} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Tiểu sử.</label>
                        <Input
                          type="textarea"
                          defaultValue="Tôi là sinh viên năm 3 tại trường Đại học Công Nghiệp"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Cập nhật thông tin
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
