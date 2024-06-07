import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

function CartModal({ show, handleClose, cartItems, removeFromCart, handleShowProductSelection, handleConfirm }) {
    return (
        <Modal show={show} onHide={handleClose} size="xl" centered>
            <Modal.Header closeButton>
                <Modal.Title>Giỏ hàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-between mb-3">
                    <Button variant="primary" onClick={handleShowProductSelection}>
                        Thêm sản phẩm
                    </Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Ảnh</th>
                            <th>Số lượng</th>
                            <th>Màu sắc</th>
                            <th>Kích cỡ</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.price}</td>
                                <td>{item.price}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                                        Xóa
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CartModal;
