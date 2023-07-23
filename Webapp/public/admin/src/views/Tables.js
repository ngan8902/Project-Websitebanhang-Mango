import * as React from "react";
import { FaShoppingCart } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

function Tables() {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState("show");

  let handleClickOpen = () => {
    setOpen(true);
    console.log(1)
  }

  let handleClickClose = () => {
    setOpen(false);
  }

  // let handleClickEdit = () => {
  //   if (edit === "show") {
  //     setEdit("show show");
  //   } else {
  //     setEdit("show");
  //   }
  // }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Các sản phẩm</CardTitle>
                <button className="btn-giohang" onClick={handleClickOpen}>
                  <FaShoppingCart></FaShoppingCart>
                </button>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-list">
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Màu</th>
                      <th>Loại</th>
                      <th className="text-right">Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Áo sơ mi</td>
                      <td>Xanh, Đỏ, Trắng, Đen</td>
                      <td>Áo</td>
                      <td className="text-right">$36,738</td>
                    </tr>
                    <tr>
                      <td>Đầm body</td>
                      <td>Đen, Trắng</td>
                      <td>Đầm</td>
                      <td className="text-right">$23,789</td>
                    </tr>
                    <tr>
                      <td>Váy xếp ly</td>
                      <td>Trắng, Đen, Xanh, Be</td>
                      <td>Chân váy</td>
                      <td className="text-right">$56,142</td>
                    </tr>
                    <tr>
                      <td>Áo crop-top</td>
                      <td>Ghi, Xám, Hồng</td>
                      <td>Áo</td>
                      <td className="text-right">$38,735</td>
                    </tr>
                    <tr>
                      <td>Set đồ thể thao</td>
                      <td>Đen, Xám</td>
                      <td>Set</td>
                      <td className="text-right">$63,542</td>
                    </tr>
                    <tr>
                      <td>Quần Jean</td>
                      <td>Đen, Xanh Đen</td>
                      <td>Quần</td>
                      <td className="text-right">$50,000</td>
                    </tr>
                    <tr>
                      <td>Quần ống loe</td>
                      <td>Xanh nhạt, Xanh đậm</td>
                      <td>Quần</td>
                      <td className="text-right">$40,500</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className="giohang">
          <Modal isOpen={open} toggle={handleClickClose} >
            <ModalHeader toggle={handleClickClose}>Chỉnh Sửa Danh Sách Sản Phẩm</ModalHeader>
            <ModalBody className="row col-8">
              <label className="setop">
                Loại:
                <select name="selectedLoai">
                  <option value="ao">Áo</option>
                  <option value="quan">Quần</option>
                  <option value="chanvay">Chân Váy</option>
                  <option value="dam">Đầm</option>
                  <option value="set">Set</option>
                </select>
              </label>

              <div className="inp">
                <div className="col">
                  Sản Phẩm:<br></br>
                  <input type="text" placeholder="Nhập tên sản phẩm" className="inp-tensp"></input>
                </div>
                <div className="col">
                  Màu:<br></br>
                  <input type="text" placeholder="Màu của sản phẩm" className="inp-mau"></input>
                </div>
              </div>
              {' '}
              <div className="col">
                Giá:<br></br>
                <input type="text" placeholder="$" className="inp-gia"></input>
              </div>

            </ModalBody>
            <ModalFooter className="modal-footer">
              <Button style={{ backgroundColor: '#1F77D0' }} className="btn-themsp" >
                Thêm
              </Button>{' '}
              <Button style={{ backgroundColor: '#FB404B' }} className="btn-xoasp" >
                Xóa
              </Button>{' '}
              <Button style={{ backgroundColor: '#d88715' }} className="btn-suasp">
                Sửa
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Tables;
