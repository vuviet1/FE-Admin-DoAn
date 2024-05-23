import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ImageUploader from "./image-upload";

function AddImageModal({ show, onHide, title, setTitle, status, setStatus, images, handleDrop, handleRemoveImage, handleSubmit }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới ảnh</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12 mt-3">
                        <label htmlFor="inputTitle" className="form-label">Tiêu đề</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputTitle"
                            placeholder="Tiêu đề ảnh ..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <label htmlFor="inputStatus" className="form-label">Trạng thái</label>
                        <Form.Select
                            aria-label="Trạng thái"
                            className="form-control"
                            id="inputStatus"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="1">Sử dụng</option>
                            <option value="2">Không sử dụng</option>
                        </Form.Select>
                    </div>
                    <div className="col-12 mt-3">
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
                    Thêm mới
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddImageModal;
