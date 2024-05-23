import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ImageUploader from "./image-upload";

function EditImageModal({ show, onHide, title, setTitle, status, setStatus, images, handleDrop, handleRemoveImage, handleSubmit }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Cập nhật ảnh</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12 mt-3">
                        <label htmlFor="editTitle" className="form-label">Tiêu đề</label>
                        <input
                            type="text"
                            className="form-control"
                            id="editTitle"
                            placeholder="Tiêu đề ảnh ..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <label htmlFor="editStatus" className="form-label">Trạng thái</label>
                        <Form.Select
                            aria-label="Trạng thái"
                            className="form-control"
                            id="editStatus"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="1">Sử dụng</option>
                            <option value="2">Không sử dụng</option>
                        </Form.Select>
                    </div>
                    <div className="col-12 mt-3">
                        <h5>Ảnh đã chọn:</h5>
                        <ImageUploader
                            onDrop={handleDrop}
                            onRemove={handleRemoveImage}
                            images={images}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Hủy bỏ</Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        handleSubmit();
                        onHide();
                    }}
                >
                    Cập nhật
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditImageModal;
