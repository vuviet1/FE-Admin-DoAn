import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Table, Image } from "react-bootstrap";
import request from "../../../utils/request";
import ViewImageModal from "./modal-view-image";

function ViewProductModal({ show, handleClose, selectedProductId }) {
    const [product, setProduct] = useState({
        product_name: "",
        quantity: "",
        price: "",
        brand_id: "",
        category_id: "",
        description: "",
        note: "",
        status: 1,
    });

    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [selectedDetail, setSelectedDetail] = useState(null);
    const [showImageModal, setShowImageModal] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await request.get(
                    `product/${selectedProductId}`
                );
                if (response.data.data) {
                    setProduct(response.data.data);
                } else {
                    console.error("No data returned from the API");
                }
            } catch (error) {
                console.error("Error while fetching product data:", error);
            }
        };

        const fetchBrands = async () => {
            try {
                const response = await request.get("brand");
                setBrands(response.data.data);
            } catch (error) {
                console.error("Error fetching brands:", error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await request.get("category");
                setCategories(response.data.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        const fetchSizes = async () => {
            try {
                const response = await request.get("size");
                setSizes(response.data.data);
            } catch (error) {
                console.error("Error fetching sizes:", error);
            }
        };

        const fetchColors = async () => {
            try {
                const response = await request.get("color");
                setColors(response.data.data);
            } catch (error) {
                console.error("Error fetching colors:", error);
            }
        };

        const fetchProductDetails = async () => {
            try {
                const response = await request.get("productdetail");
                const allProductDetails = response.data.data;
                const filteredDetails = allProductDetails.filter(
                    (detail) => detail.product_id === selectedProductId
                );
                setProductDetails(filteredDetails);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        if (selectedProductId) {
            fetchProduct();
            fetchProductDetails();
        }

        fetchBrands();
        fetchCategories();
        fetchSizes();
        fetchColors();
    }, [selectedProductId]);

    const getSizeName = (sizeId) => {
        const size = sizes.find((s) => s.size_id === sizeId);
        return size ? size.size : sizeId;
    };

    const getColorName = (colorId) => {
        const color = colors.find((c) => c.color_id === colorId);
        return color ? color.color : colorId;
    };

    const fetchImages = async (productDetailId) => {
        try {
            const response = await request.get(`library/${productDetailId}`);
            setImages(response.data.data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    const handleShowImageModal = async (detail) => {
        setSelectedDetail(detail);
        await fetchImages(detail.product_detail_id);
        setShowImageModal(true);
    };

    const handleCloseImageModal = () => {
        setShowImageModal(false);
        setSelectedDetail(null);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xem sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <Form.Group
                                controlId="productImage"
                                style={{
                                    display: "grid",
                                    textAlign: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Form.Label>Ảnh sản phẩm</Form.Label>
                                <Image
                                    src={
                                        "http://127.0.0.1:8000/uploads/product/" +
                                        product.image
                                    }
                                    alt={product.product_name}
                                    style={{ width: "250px", height: "250px" }}
                                    thumbnail="true"
                                    disabled
                                />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group controlId="productNameEdit">
                                <Form.Label>Tên sản phẩm</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên sản phẩm"
                                    value={product.product_name}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="priceEdit">
                                <Form.Label>Giá</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Giá sản phẩm"
                                    value={product.price}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="brandIdEdit">
                                <Form.Label>Thương hiệu</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={product.brand_id}
                                    disabled
                                >
                                    <option value="">Chọn thương hiệu</option>
                                    {brands.map((brand) => (
                                        <option
                                            key={brand.brand_id}
                                            value={brand.brand_id}
                                        >
                                            {brand.brand_name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="categoryIdEdit">
                                <Form.Label>Danh mục</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={product.category_id}
                                    disabled
                                >
                                    <option value="">Chọn danh mục</option>
                                    {categories.map((category) => (
                                        <option
                                            key={category.category_id}
                                            value={category.category_id}
                                        >
                                            {category.category_name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </div>

                        <div className="col-12">
                            <Form.Group controlId="inputDescription">
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Mô tả sản phẩm"
                                    value={product.description}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group controlId="inputNote">
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Ghi chú"
                                    value={product.note}
                                    readOnly
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <h5>Danh sách phân loại</h5>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Mã</th>
                                        <th>Kích cỡ</th>
                                        <th>Màu sắc</th>
                                        <th>Số lượng</th>
                                        <th style={{ width: "250px" }}>
                                            Ghi chú
                                        </th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productDetails.length > 0 ? (
                                        productDetails.map((detail, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {detail.product_detail_id}
                                                </td>
                                                <td>
                                                    {getSizeName(
                                                        detail.size_id
                                                    )}
                                                </td>
                                                <td>
                                                    {getColorName(
                                                        detail.color_id
                                                    )}
                                                </td>
                                                <td>{detail.quantity}</td>
                                                <td>{detail.note}</td>
                                                <td>
                                                    <Button
                                                        variant="info"
                                                        onClick={() =>
                                                            handleShowImageModal(
                                                                detail
                                                            )
                                                        }
                                                    >
                                                        <i class="fas fa-images"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                style={{ textAlign: "center" }}
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
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>

            <ViewImageModal
                show={showImageModal}
                handleClose={handleCloseImageModal}
                images={images}
                detail={selectedDetail}
            />
        </>
    );
}

export default ViewProductModal;
