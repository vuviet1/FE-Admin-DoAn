import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import request from "../../../utils/request";

function ViewAdminModal({ show, handleClose, selectedAdminId }) {
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        google_id: "",
        note: "",
        avatar: "",
        phone: "",
        address: "",
        status: 1,
    });

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const response = await request.get(`user/${selectedAdminId}`);
                if (response.data.data) {
                    setAdmin(response.data.data);
                } else {
                    console.error("No data returned from the API");
                }
            } catch (error) {
                console.error("Error while fetching admin data:", error);
            }
        };

        if (selectedAdminId) {
            fetchAdmin();
        }
    }, [selectedAdminId]);

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xem thông tin quản trị viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <Form.Group
                                controlId="adminAvatar"
                                style={{
                                    display: "grid",
                                    textAlign: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Form.Label>Ảnh đại diện</Form.Label>
                                <Image
                                    src={
                                        "http://127.0.0.1:8000/uploads/avatar/" +
                                        admin.avatar
                                    }
                                    alt={admin.name}
                                    style={{
                                        width: "250px",
                                        height: "250px",
                                    }}
                                    thumbnail
                                />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group controlId="adminName">
                                <Form.Label>Tên quản trị viên</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên quản trị viên"
                                    value={admin.name}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="adminEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={admin.email}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="adminPhone">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Số điện thoại"
                                    value={admin.phone}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="adminAddress">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Địa chỉ"
                                    value={admin.address}
                                    readOnly
                                />
                            </Form.Group>
                        </div>

                        <div className="col-12">
                            <Form.Group controlId="adminRole">
                                <Form.Label>Vai trò</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Vai trò"
                                    value={admin.role}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="adminGoogleId">
                                <Form.Label>Google ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Google ID"
                                    value={admin.google_id}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="adminNote">
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Ghi chú"
                                    value={admin.note}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="adminStatus">
                                <Form.Label>Trạng thái</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Trạng thái"
                                    value={admin.status === 1 ? "Sử dụng": "Không sử dụng"}
                                    readOnly
                                />
                            </Form.Group>
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

export default ViewAdminModal;
