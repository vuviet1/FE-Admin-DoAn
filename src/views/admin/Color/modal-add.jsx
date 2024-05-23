import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import request from "../../../utils/request";

function AddColorModal({ show, handleClose, onAddColor }) {
    const [color, setColor] = useState("");
    const [status, setStatus] = useState(1);
    const [note, setNote] = useState("");

    const addColor = async (e) => {
        e.preventDefault();
        try {
            await request.post("color", {
                color,
                status,
                note,
            });
            onAddColor();
            handleClose();
        } catch (error) {
            console.error("Failed to add color:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới màu</Modal.Title>
            </Modal.Header>
            <Form onSubmit={addColor}>
                <Modal.Body>
                    <Form.Group controlId="color">
                        <Form.Label>Tên màu</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tên màu mới ..."
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
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

export default AddColorModal;
