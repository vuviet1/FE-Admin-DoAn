import React, { useState } from "react";
import { Image } from "react-bootstrap";


import Topbar from "../components/topbar";
import Footer from "../components/footer";
import AddImageModal from "./modal-add";
import EditImageModal from "./modal-edit";
import DetailImageModal from "./modal-view";

function ImageLibrary() {
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("1");
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    const [editStatus, setEditStatus] = useState("1");
    const [editImages, setEditImages] = useState([]);

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDrop = (acceptedFiles) => {
        setImages([...images, ...acceptedFiles]);
    };

    const handleRemoveImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    const handleEditDrop = (acceptedFiles) => {
        setEditImages([...editImages, ...acceptedFiles]);
    };

    const handleEditRemoveImage = (index) => {
        const newImages = editImages.filter((_, i) => i !== index);
        setEditImages(newImages);
    };

    const handleSubmit = () => {
        const newProduct = {
            id: products.length + 1,
            title,
            status,
            images,
        };
        setProducts([...products, newProduct]);
        setImages([]);
        setTitle("");
        setStatus("1");
    };

    const handleShowDetail = (product) => {
        setSelectedProduct(product);
        setShowDetailModal(true);
    };

    const handleCloseDetailModal = () => {
        setShowDetailModal(false);
        setSelectedProduct(null);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
    };

    const handleEditProduct = () => {
        const updatedProducts = products.map((product) =>
            product.id === selectedProduct.id
                ? { ...product, title: editTitle, status: editStatus, images: editImages }
                : product
        );
        setProducts(updatedProducts);
        setShowEditModal(false);
        setEditImages([]);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedProduct(null);
        setEditImages([]);
    };

    const handleShowEditModal = (product) => {
        setEditTitle(product.title);
        setEditStatus(product.status);
        setSelectedProduct(product);
        setEditImages(product.images);
        setShowEditModal(true);
    };

    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className="container-fluid" id="container-wrapper">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Thư viện ảnh</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item">Danh mục quản lý</li>
                                <li className="breadcrumb-item active" aria-current="page">Thư viện ảnh</li>
                            </ol>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card mb-4">
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Danh sách ảnh</h6>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => setShowAddModal(true)}
                                        >
                                            <i className="fas fa-plus" /> Thêm mới
                                        </button>
                                    </div>
                                    <div className="table-responsive p-3">
                                        <table className="table align-items-center table-flush table-hover" id="dataTableHover">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Ảnh đại diện</th>
                                                    <th>Tiêu đề</th>
                                                    <th>Trạng thái</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((product, index) => (
                                                    <tr key={product.id}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <Image src={URL.createObjectURL(product.images[0])} height={50} width={50} rounded />
                                                        </td>
                                                        <td>{product.title}</td>
                                                        <td>{product.status === "1" ? "Sử dụng" : "Không sử dụng"}</td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => setProducts(products.filter((_, i) => i !== index))}
                                                            >
                                                                <i className="fas fa-trash" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-info ml-2"
                                                                onClick={() => handleShowDetail(product)}
                                                            >
                                                                <i className="fas fa-eye" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-warning ml-2 text-white"
                                                                onClick={() => handleShowEditModal(product)}
                                                            >
                                                                <i className="fas fa-edit" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AddImageModal
                            show={showAddModal}
                            onHide={handleCloseAddModal}
                            title={title}
                            setTitle={setTitle}
                            status={status}
                            setStatus={setStatus}
                            images={images}
                            handleDrop={handleDrop}
                            handleRemoveImage={handleRemoveImage}
                            handleSubmit={handleSubmit}
                        />

                        <EditImageModal
                            show={showEditModal}
                            onHide={handleCloseEditModal}
                            title={editTitle}
                            setTitle={setEditTitle}
                            status={editStatus}
                            setStatus={setEditStatus}
                            images={editImages}
                            handleDrop={handleEditDrop}
                            handleRemoveImage={handleEditRemoveImage}
                            handleSubmit={handleEditProduct}
                        />

                        <DetailImageModal
                            show={showDetailModal}
                            onHide={handleCloseDetailModal}
                            product={selectedProduct}
                        />
                    </div>
                    <Footer />
                </div>
            </div>
            <a href="#page-top" className="scroll-to-top rounded" onClick={handleScrollToTop}>
                <i className="fas fa-angle-up" />
            </a>
        </div>
    );
}

export default ImageLibrary;
