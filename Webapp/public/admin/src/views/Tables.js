import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Các sản phẩm</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
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
      </div>
    </>
  );
}

export default Tables;
