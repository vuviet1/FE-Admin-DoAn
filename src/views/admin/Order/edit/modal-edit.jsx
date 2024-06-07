import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import request from "../../../../utils/request";
// import EditOrderDetailModal from "./modal-edit-detail";

function EditOrderModal({
    show,
    handleClose,
    selectedOrderId,
    onUpdateOrder,
}) {
    const [order, setOrder] = useState({
        order_id: "",
        customer_name: "",
        order_date: "",
        status: 1,
        note: "",
    });

    const [orderDetails, setOrderDetails] = useState([]);
    const [editDetailModalShow, setEditDetailModalShow] = useState(false);
    const [selectedOrderDetail, setSelectedOrderDetail] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await request.get(
                    `order/${selectedOrderId}`
                );
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
                const response = await request.get("orderdetail");
                const allOrderDetails = response.data.data;
                const filteredDetails = allOrderDetails.filter(
                    (detail) => detail.order_id === selectedOrderId
                );
                setOrderDetails(filteredDetails);
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        };

        if (selectedOrderId) {
            fetchOrder();
            fetchOrderDetails();
        }
    }, [selectedOrderId]);

    const updateOrder = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                customer_name: order.customer_name,
                order_date: order.order_date,
                status: order.status,
                note: order.note,
            };

            await request.put(`order/${selectedOrderId}`, formData);
            onUpdateOrder();
            handleClose();
        } catch (error) {
            console.error("Error updating order:", error);
        }
    };

    const deleteOrderDetail = async (detailId) => {
        if (window.confirm("Bạn có chắc muốn xóa chi tiết đơn hàng này không?")) {
            try {
                await request.delete(`orderdetail/${detailId}`);
                setOrderDetails(
                    orderDetails.filter(
                        (detail) => detail.order_detail_id !== detailId
                    )
                );
            } catch (error) {
                console.error("Error deleting order detail:", error);
            }
        }
    };

    const handleEditDetail = (detailId) => {
        const detail = orderDetails.find(
            (detail) => detail.order_detail_id === detailId
        );
        setSelectedOrderDetail(detail);
        setEditDetailModalShow(true);
    };

    const handleDetailModalClose = () => {
        setEditDetailModalShow(false);
        setSelectedOrderDetail(null);
    };

    const handleDetailUpdate = () => {
        const fetchOrderDetails = async () => {
            try {
                const response = await request.get("orderdetail");
                const allOrderDetails = response.data.data;
                const filteredDetails = allOrderDetails.filter(
                    (detail) => detail.order_id === selectedOrderId
                );
                setOrderDetails(filteredDetails);
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        };
        fetchOrderDetails();
        handleDetailModalClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật đơn hàng</Modal.Title>
                </Modal.Header>
                <Form onSubmit={updateOrder}>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-6">
                                <Form.Group controlId="customerNameEdit">
                                    <Form.Label>Tên khách hàng</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Cập nhật tên khách hàng ..."
                                        value={order.customer_name}
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                customer_name: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="orderDateEdit">
                                    <Form.Label>Ngày đặt hàng</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Cập nhật ngày đặt hàng ..."
                                        value={order.order_date}
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                order_date: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="statusEdit">
                                    <Form.Label>Trạng thái</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={order.status}
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                status: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="1">Hoàn thành</option>
                                        <option value="0">Đang xử lý</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="col-12">
                                <Form.Group controlId="inputNote">
                                    <Form.Label>Ghi chú</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Ghi chú ..."
                                        value={order.note}
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                note: e.target.value,
                                            })
                                        }
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
                                            <th>Sản phẩm</th>
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
                                            orderDetails.map(
                                                (detail, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            {
                                                                detail.order_detail_id
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                detail.product_name
                                                            }
                                                        </td>
                                                        <td>
                                                            {detail.quantity}
                                                        </td>
                                                        <td>
                                                            {detail.price}
                                                        </td>
                                                        <td>{detail.note}</td>
                                                        <td
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Button
                                                                variant="info"
                                                                onClick={() =>
                                                                    handleEditDetail(
                                                                        detail.order_detail_id
                                                                    )
                                                                }
                                                                style={{
                                                                    marginRight:
                                                                        "5px",
                                                                }}
                                                            >
                                                                Sửa
                                                            </Button>
                                                            <Button
                                                                variant="danger"
                                                                onClick={() =>
                                                                    deleteOrderDetail(
                                                                        detail.order_detail_id
                                                                    )
                                                                }
                                                            >
                                                                Xóa
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="6"
                                                    style={{
                                                        textAlign: "center",
                                                    }}
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
                            Hủy bỏ
                        </Button>
                        <Button type="submit" variant="primary">
                            Cập nhật
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            {/* Edit Order Detail Modal */}
            {/* <EditOrderDetailModal
                show={editDetailModalShow}
                handleClose={handleDetailModalClose}
                orderDetail={selectedOrderDetail}
                onEditOrderDetail={handleDetailUpdate}
            /> */}
        </>
    );
}

export default EditOrderModal;
