import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import request from "../../../../utils/request";

function ViewOrderModal({ show, handleClose, selectedOrderId }) {
    const [order, setOrder] = useState({
        order_number: "",
        order_date: "",
        customer_name: "",
        total_amount: "",
        status: "",
        note: "",
    });

    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await request.get(`order/${selectedOrderId}`);
                if (response.data.data) {
                    setOrder(response.data.data);
                } else {
                    console.error("No data returned from the API");
                }
            } catch (error) {
                console.error("Error while fetching order data:", error);
            }
        };

        const fetchOrderDetails = async () => {
            try {
                const response = await request.get(`orderdetail/${selectedOrderId}`);
                setOrderDetails(response.data.data);
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        };

        if (selectedOrderId) {
            fetchOrder();
            fetchOrderDetails();
        }
    }, [selectedOrderId])

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xem đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <Form.Group controlId="orderNumber">
                                <Form.Label>Mã đơn hàng</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Mã đơn hàng"
                                    value={order.order_number}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="orderDate">
                                <Form.Label>Ngày đặt hàng</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ngày đặt hàng"
                                    value={order.order_date}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="customerName">
                                <Form.Label>Tên khách hàng</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên khách hàng"
                                    value={order.customer_name}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="totalAmount">
                                <Form.Label>Tổng số tiền</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tổng số tiền"
                                    value={order.total_amount}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="status">
                                <Form.Label>Trạng thái</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Trạng thái"
                                    value={order.status}
                                    readOnly
                                />
                            </Form.Group>
                        </div>

                        <div className="col-12">
                            <Form.Group controlId="inputNote">
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Ghi chú"
                                    value={order.note}
                                    readOnly
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <h5>Chi tiết đơn hàng</h5>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Mã</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá</th>
                                        <th style={{ width: "250px" }}>
                                            Ghi chú
                                        </th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderDetails.length > 0 ? (
                                        orderDetails.map((detail, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {detail.order_detail_id}
                                                </td>
                                                <td>
                                                    {detail.product_name}
                                                </td>
                                                <td>{detail.quantity}</td>
                                                <td>{detail.price}</td>
                                                <td>{detail.note}</td>
                                                <td>
                                                    <Button
                                                        variant="info"
                                                        // onClick={() =>
                                                        //     handleShowImageModal(
                                                        //         detail
                                                        //     )
                                                        // }
                                                    >
                                                        <i className="fas fa-images"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                style={{ textAlign: "center" }}
                                            >
                                                Không có dữ liệu
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewOrderModal;
