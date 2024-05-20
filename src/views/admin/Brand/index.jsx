/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment } from "react";
import Table from "react-bootstrap/Table";

import database from "../components/database"
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import request from "../../../utils/request";
import { Link } from "react-router-dom";

function Brand() {
    const [brands, setBrands] = useState([]);
    const [brand_name, setBrandName] = useState("");
    const [selectedBrandId, setSelectedBrandId] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get("brand");
                console.log(response.data.data.data);
                setBrands(response.data.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let table
        if (brands.length > 0) {
            table = database.initializeDataTable("#dataTableHover")
        }
            return () => {
                if(table) {
                    table.destroy()
                }
            }
    }, [brands]);

    const addBrand = async () => {
        try {
            const response = await request.post("brand", {
                brand_name: brand_name,
            });
            console.log("Brand added successfully:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("Failed to add brand:", error);
        }
    };

    const handleEditButtonClick = async (brand_id) => {
        try {
            const response = await request.get(`brand/${brand_id}`);
            if (response.data) {
                setSelectedBrand(response.data);
                setSelectedBrandId(brand_id);
            } else {
                console.error("No data returned from the API");
            }
        } catch (error) {
            console.error("Error while fetching brand data:", error);
        }
    };

    const updateBrand = async () => {
        try {
            if (!selectedBrand.brand_name) {
                console.error("Trường thương hiệu là bắt buộc.");
                return;
            }

            await request.put(`brand/${selectedBrandId}`, {
                brand_name: selectedBrand.brand_name,
            });
            window.location.reload();
        } catch (error) {
            console.error("Error updating brand:", error);
        }
    };

    const deleteBrand = async (brand_id) => {
        if (
            window.confirm(
                "Bạn có chắc muốn xóa thương hiệu này không?"
            )
        ) {
            try {
                await request.delete(`brand/${brand_id}`);
                window.location.reload();
            } catch (error) {
                console.error("Error deleting brand:", error);
            }
        }
    };

    const BrandTableBody = ({
        brands,
        handleEditButtonClick,
        deleteBrand,
    }) => {
        if (!brands || brands.length === 0) {
            return (
                <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>
                        Không có dữ liệu
                    </td>
                </tr>
            );
        }

        return (
            <tbody>
                {brands.map((brand, index) => (
                    <tr key={index}>
                        <td style={{ textAlign: "left" }}>{brand.brand_id}</td>
                        <td style={{ textAlign: "left" }}>{brand.brand_name}</td>
                        <td style={{ textAlign: "center" }}>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#editModal"
                                style={{ marginRight: "5px" }}
                                onClick={() => handleEditButtonClick(brand.brand_id)}
                            >
                                <i className="far fa-edit" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deleteBrand(brand.brand_id)}
                            >
                                <i className="fas fa-trash" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    };

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Fragment>
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />

                        <div className="container-fluid" id="container-wrapper">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">
                                    Thương hiệu
                                </h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        Danh mục quản lý
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Thương hiệu
                                    </li>
                                </ol>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card mb-4">
                                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Danh sách thương hiệu
                                            </h6>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-toggle="modal"
                                                data-target="#modalAdd"
                                                id="#modalCenter"
                                            >
                                                <i className="fas fa-plus" />
                                                Thêm mới
                                            </button>
                                        </div>
                                        <div className="table-responsive p-3">
                                            <Table className="table align-items-center table-flush table-hover" id="dataTableHover">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th style={{ textAlign: "left" }}>Mã</th>
                                                        <th style={{ textAlign: "left" }}>Tên thương hiệu</th>
                                                        <th style={{ textAlign: "center" }}>Hành động</th>
                                                    </tr>
                                                </thead>
                                                <BrandTableBody
                                                    brands={brands}
                                                    handleEditButtonClick={handleEditButtonClick}
                                                    deleteBrand={deleteBrand}
                                                />
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="modalAdd" tabIndex={-1} role="dialog" aria-labelledby="modalAddTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <form
                                        className="modal-content"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            addBrand();
                                        }}
                                    >
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="modalAddTitle">
                                                Thêm mới thương hiệu
                                            </h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-12">
                                                <label htmlFor="brand_name" className="form-label">
                                                    Tên thương hiệu
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="brand_name"
                                                    placeholder="Tên thương hiệu mới ..."
                                                    value={brand_name}
                                                    onChange={(e) => setBrandName(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal">
                                                Hủy bỏ
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Thêm mới
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="editModalTitle">
                                                Cập nhật thương hiệu
                                            </h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-12">
                                                <label htmlFor="brand_name_edit" className="form-label">
                                                    Tên thương hiệu
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="brand_name_edit"
                                                    placeholder="Cập nhật tên thương hiệu mới ..."
                                                    value={selectedBrand.brand_name || ""}
                                                    onChange={(e) =>
                                                        setSelectedBrand({
                                                            ...selectedBrand,
                                                            brand_name: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal">
                                                Hủy bỏ
                                            </button>
                                            <button type="button" className="btn btn-primary" onClick={updateBrand}>
                                                Cập nhật
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
                <a href="#page-top" className="scroll-to-top rounded" onClick={handleScrollToTop}>
                    <i className="fas fa-angle-up" />
                </a>
            </div>
        </Fragment>
    );
}
export default Brand;
