import React, { useState } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function AddOrder() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        // Add more products as needed
    ];

    // Convert products to the format required by react-select
    const productOptions = products.map((product) => ({
        value: product.id,
        label: product.name,
    }));

    const handleProductSelect = (selectedOption) => {
        setSelectedProduct(selectedOption);
    };

    return (
        <>
            

            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Thông tin chung</h5>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="purchaseDate">
                                    <Form.Label>Ngày mua hàng</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Địa chỉ giao hàng ..."
                                    />
                                </Form.Group>
                                <Form.Group controlId="phoneNumber">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Số điện thoại ..."
                                    />
                                </Form.Group>
                                <Form.Group controlId="total">
                                    <Form.Label>Tổng tiền</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tổng tiền ..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="status">
                                    <Form.Label>Trạng thái</Form.Label>
                                    <Form.Control as="select">
                                        <option value="pending">
                                            Chờ xử lý
                                        </option>
                                        <option value="shipped">
                                            Đã giao hàng
                                        </option>
                                        <option value="delivered">
                                            Đã nhận hàng
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="paymentStatus">
                                    <Form.Label>
                                        Trạng thái thanh toán
                                    </Form.Label>
                                    <Form.Control as="select">
                                        <option value="pending">
                                            Chờ thanh toán
                                        </option>
                                        <option value="completed">
                                            Đã thanh toán
                                        </option>
                                        <option value="failed">
                                            Thanh toán thất bại
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="paymentMethod">
                                    <Form.Label>
                                        Phương thức thanh toán
                                    </Form.Label>
                                    <Form.Control as="select">
                                        <option value="cash">Tiền mặt</option>
                                        <option value="credit_card">
                                            Thẻ tín dụng
                                        </option>
                                        <option value="bank_transfer">
                                            Chuyển khoản
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="shippingMethod">
                                    <Form.Label>
                                        Phương thức vận chuyển
                                    </Form.Label>
                                    <Form.Control as="select">
                                        <option value="standard">
                                            Giao hàng tiêu chuẩn
                                        </option>
                                        <option value="express">
                                            Giao hàng nhanh
                                        </option>
                                        <option value="self_pickup">
                                            Tự đến lấy hàng
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="note">
                            <Form.Label>Ghi chú</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Ghi chú ..."
                            />
                        </Form.Group>
                        <hr />
                        <h5>Thông tin chi tiết</h5>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="productSearch">
                                    <Form.Label>Tìm sản phẩm</Form.Label>
                                    <Select
                                        options={productOptions}
                                        onChange={handleProductSelect}
                                        placeholder="Tìm kiếm sản phẩm..."
                                    />
                                </Form.Group>
                                <Form.Group controlId="quantity">
                                    <Form.Label>Số lượng</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Số lượng ..."
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="userId">
                                    <Form.Label>Khách hàng</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="ID người dùng ..."
                                    />
                                </Form.Group>
                                <Form.Group controlId="price">
                                    <Form.Label>Giá</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Giá ..."
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="orderDetailNote">
                            <Form.Label>Ghi chú</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Ghi chú ..."
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleClose}>
                        Hủy bỏ
                    </Button>
                    <Button type="submit" variant="primary">
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddOrder;
