import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import request from "../../../utils/request";
import ImageUploader from "../components/ImageUploader";

function EditAdminModal({ show, handleClose, selectedAdminId, onUpdateAdmin }) {
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        password: "",
        role: 1,
        note: "",
        avatar: "",
        phone: "",
        address: "",
        status: 1,
        google_id: "",
    });

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const response = await request.get(`user/${selectedAdminId}`);
                if (response.data.data) {
                    console.log(response.data.data)
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

    const updateAdmin = async (e) => {
        e.preventDefault();
        try {
            // if (images.length !== 1) {
            //     alert("Vui lòng chọn một ảnh duy nhất.");
            //     return;
            // }

            const formData = {
                name: admin.name,
                email: admin.email,
                password: admin.password,
                role: admin.role,
                note: admin.note,
                avatar: images[0],
                phone: admin.phone,
                address: admin.address,
                status: admin.status,
                google_id: admin.google_id,
            };

            console.log(formData);

            await request.put(`user/${selectedAdminId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                mode: "no-cors",
            });
            onUpdateAdmin();
            handleClose();
        } catch (error) {
            console.error("Error updating admin:", error);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật Admin</Modal.Title>
                </Modal.Header>
                <Form onSubmit={updateAdmin}>
                    <Modal.Body>
                        <div className="row">
                            <div
                                className="col-6"
                                style={{ textAlign: "center" }}
                            >
                                <Form.Group controlId="adminAvatar">
                                    <Form.Label>Ảnh đại diện</Form.Label>
                                    <ImageUploader
                                        images={images}
                                        setImages={setImages}
                                    />
                                    {!images.length && (
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
                                    )}
                                </Form.Group>
                            </div>
                            <div className="col-6">
                                <Form.Group controlId="adminNameEdit">
                                    <Form.Label>Tên Admin</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Cập nhật tên Admin ..."
                                        value={admin.name}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="adminEmailEdit">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Cập nhật email ..."
                                        value={admin.email}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="adminPasswordEdit">
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Cập nhật mật khẩu ..."
                                        value={admin.password}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="adminRoleEdit">
                                    <Form.Label>Vai trò</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={admin.role}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                role: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="1">Quản trị viên</option>
                                        <option value="0">
                                            Khách hàng
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="adminStatusEdit">
                                    <Form.Label>Trạng thái</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={admin.status}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                status: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="1">Hoạt động</option>
                                        <option value="0">
                                            Không hoạt động
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="col-12">
                                <Form.Group controlId="inputPhone">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Cập nhật số điện thoại ..."
                                        value={admin.phone}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                phone: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="inputAddress">
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Cập nhật địa chỉ ..."
                                        value={admin.address}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                address: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="inputGoogleId">
                                    <Form.Label>Google ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Cập nhật Google ID ..."
                                        value={admin.google_id}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                google_id: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="inputDescription">
                                    <Form.Label>Ghi chú</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Ghi chú ..."
                                        value={admin.note}
                                        onChange={(e) =>
                                            setAdmin({
                                                ...admin,
                                                note: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
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
        </>
    );
}

export default EditAdminModal;
