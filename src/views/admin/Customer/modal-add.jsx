import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import ImageUploader from "../components/ImageUploader";

function AddCustomerModal({ show, handleClose, onAddCustomer }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("1");
    const [role, setRole] = useState("");
    const [address, setAddress] = useState("");
    const [notes, setNotes] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCustomer({
            name,
            email,
            phone,
            password,
            status,
            role,
            address,
            notes,
            image,
        });
        handleClose();
    };

    const handleImageChange = (image) => {
        setImage(image.name);
    };

    return (
        <Modal show={show} onHide={handleClose} size="xl" centered>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới khách hàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="inputImg" className="form-label">
                                Ảnh đại diện
                            </label>
                            <ImageUploader onImageChange={handleImageChange} />
                        </div>
                        <div className="col-6">
                            <Form.Group controlId="inputName">
                                <Form.Label>Tên khách hàng</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên khách hàng mới ..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="inputEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email ..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="inputPhone">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Số điện thoại ..."
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="inputPassword">
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Mật khẩu ..."
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mt-3">
                            <Form.Group controlId="inputStatus">
                                <Form.Label>Trạng thái</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="1">Sử dụng</option>
                                    <option value="2">Không sử dụng</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className="col-6 mt-3">
                            <Form.Group controlId="inputRole">
                                <Form.Label>Quyền</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Quyền ..."
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                            <Form.Group controlId="inputAddress">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Địa chỉ ..."
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                            <Form.Group controlId="inputNotes">
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Ghi chú ..."
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <Button variant="outline-primary" onClick={handleClose}>
                            Hủy bỏ
                        </Button>
                        <Button variant="primary" type="submit">
                            Thêm mới
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddCustomerModal;
