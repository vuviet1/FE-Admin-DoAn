import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import request from "../../../utils/request";

function AddBrandModal({ show, handleClose, onAddBrand }) {
    const [brandName, setBrandName] = useState("");
    const [status, setStatus] = useState(1);
    const [note, setNote] = useState("");

    const addBrand = async (e) => {
        e.preventDefault();
        try {
            const response = await request.post("brand", {
                brand_name: brandName,
                status: status,
                note: note,
            });
            console.log("Brand added successfully:", response.data);
            onAddBrand();
            handleClose();
        } catch (error) {
            console.error("Failed to add brand:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới thương hiệu</Modal.Title>
            </Modal.Header>
            <Form onSubmit={addBrand}>
                <Modal.Body>
                    <Form.Group controlId="brandName">
                        <Form.Label>Tên thương hiệu</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tên thương hiệu mới ..."
                            value={brandName}
                            onChange={(e) => setBrandName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="status">
                        <Form.Label>Trạng thái</Form.Label>
                        <Form.Control
                            as="select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="1">Sử dụng</option>
                            <option value="0">Không sử dụng</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="note">
                        <Form.Label>Ghi chú</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy bỏ
                    </Button>
                    <Button type="submit" variant="primary">
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default AddBrandModal;
