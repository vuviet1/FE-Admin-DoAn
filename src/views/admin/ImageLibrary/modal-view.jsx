import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

function DetailImageModal({ show, onHide, product }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Chi tiết sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {product && (
                    <div>
                        <h5>{product.title}</h5>
                        <p>Trạng thái: {product.status === "1" ? "Sử dụng" : "Không sử dụng"}</p>
                        <div className="row">
                            {product.images.map((image, index) => (
                                <div key={index} className="col-3 mb-3">
                                    <Image src={URL.createObjectURL(image)} thumbnail className="img-fluid" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Đóng</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailImageModal;
