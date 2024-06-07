import React, { useState, useEffect } from "react";
import { Modal, Button, Table, Form, Pagination } from "react-bootstrap";
import {
    FaAngleDoubleLeft,
    FaAngleLeft,
    FaAngleRight,
    FaAngleDoubleRight,
} from "react-icons/fa"; // Import icons
import request from "../../../../utils/request";

function ProductSelectionModal({ show, handleClose, addToCart }) {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5); // Số sản phẩm mỗi trang

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await request.get("product");
                setProducts(response.data.data);
                setFilteredProducts(response.data.data);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm:", error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.product_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, products]);

    const handleSelectProduct = (productId) => {
        const index = selectedProducts.indexOf(productId);
        if (index === -1) {
            setSelectedProducts([...selectedProducts, productId]);
        } else {
            const updatedSelectedProducts = selectedProducts.filter(
                (id) => id !== productId
            );
            setSelectedProducts(updatedSelectedProducts);
        }
    };

    const handleAddToCart = () => {
        addToCart(selectedProducts);
        handleClose();
    };

    // Logic phân trang
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Danh sách sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Tìm kiếm sản phẩm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Ảnh</th>
                            <th>Giá</th>
                            <th>Chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{product.product_name}</td>
                                <td>
                                    <img
                                        src={
                                            "http://127.0.0.1:8000/uploads/product/" +
                                            product.image
                                        }
                                        alt={product.product_name}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                        }}
                                    />
                                </td>
                                <td>{product.price}</td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Form.Check
                                            style={{
                                                transform: "scale(2)", 
                                            }}
                                            type="checkbox"
                                            onChange={() =>
                                                handleSelectProduct(
                                                    product.product_id
                                                )
                                            }
                                            checked={selectedProducts.includes(
                                                product.product_id
                                            )}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination className="justify-content-center">
                    <Pagination.Item onClick={() => paginate(1)}>
                        <FaAngleDoubleLeft />
                    </Pagination.Item>
                    <Pagination.Item
                        onClick={() =>
                            paginate(currentPage > 1 ? currentPage - 1 : 1)
                        }
                    >
                        <FaAngleLeft />
                    </Pagination.Item>
                    {Array.from(
                        {
                            length: Math.ceil(
                                filteredProducts.length / productsPerPage
                            ),
                        },
                        (_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={index + 1 === currentPage}
                                activeLabel=""
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        )
                    )}
                    <Pagination.Item
                        onClick={() =>
                            paginate(
                                currentPage <
                                    Math.ceil(
                                        filteredProducts.length /
                                            productsPerPage
                                    )
                                    ? currentPage + 1
                                    : Math.ceil(
                                          filteredProducts.length /
                                              productsPerPage
                                      )
                            )
                        }
                    >
                        <FaAngleRight />
                    </Pagination.Item>
                    <Pagination.Item
                        onClick={() =>
                            paginate(
                                Math.ceil(
                                    filteredProducts.length / productsPerPage
                                )
                            )
                        }
                    >
                        <FaAngleDoubleRight />
                    </Pagination.Item>
                </Pagination>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={handleAddToCart}>
                    Thêm vào giỏ hàng
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductSelectionModal;
