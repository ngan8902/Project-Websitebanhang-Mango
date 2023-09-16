import React from "react";
import {
    Row,
    Card,
    Col,
    CardHeader,
    CardTitle,
    CardBody,
    Table
} from "reactstrap"


function Ao() {
    return (
        <div className="table-products">
            <Row>
                <Col md="10">
                    <Card className="card-listproduct">
                        <CardHeader className="table-header">
                            <CardTitle tag="h4">Các sản phẩm</CardTitle>

                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead></thead>
                                <tbody>

                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Ao;