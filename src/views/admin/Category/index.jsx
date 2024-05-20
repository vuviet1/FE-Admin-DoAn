/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment } from "react";
import Table from "react-bootstrap/Table";

import database from "../components/database"
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import request from "../../../utils/request";
import { Link } from "react-router-dom";

function Category() {
    const [categorys, setcategorys] = useState([]);
    const [category_name, setcategoryname] = useState("");
    // const [note, setNote] = useState("");
    const [selectedcategoryId, setSelectedcategoryId] = useState(null);
    const [selectedcategory, setSelectedcategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get("category");
                // console.log(response.json(response.data.data.data));
                setcategorys(response.data.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let table
        if (categorys.length > 0) {
            table = database.initializeDataTable("#dataTableHover")
        }
            return () => {
                if(table) {
                    table.destroy()
                }
            }
    }, [categorys]);

    // Add the category
    const addcategory = async () => {
        try {
            const response = await request.post("category", {
                category_name: category_name,
            });
            console.log("category name added successfully:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("Failed to add category name:", error);
        }
    };

    // Update the category
    const handleEditButtonClick = async (category_id) => {
        try {
            // Gọi API để lấy dữ liệu category có id tương ứng
            const response = await request.get(`category/${category_id}`);
            if (response.data) {
                setSelectedcategory(response.data);
                setSelectedcategoryId(category_id);
            } else {
                console.error("No data returned from the API");
            }
        } catch (error) {
            console.error("Error while fetching category data:", error);
        }
    };

    const updatecategory = async () => {
        try {
            if (!selectedcategory.category_name) {
                console.error("Trường danh mục là bắt buộc.");
                return;
            }

            await request.put(`category/${selectedcategoryId}`, {
                // selectedcategory
                category_name: selectedcategory.category_name,
            });
            window.location.reload();
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    // Delete the category
    const deletecategory = async (category_id) => {
        if (
            window.confirm(
                "Bạn có chắc muốn xóa danh mục này không?"
            )
        ) {
            try {
                await request.delete(`category/${category_id}`);
                window.location.reload(); // Reload trang sau khi xóa
            } catch (error) {
                console.error("Error deleting category:", error);
            }
        }
    };

    const CategoryTableBody = ({
        categorys,
        handleEditButtonClick,
        deletecategory,
    }) => {
        return (
            <tbody>
                {categorys.map((category, index) => (
                    <tr key={index}>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {category.category_id}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {category.category_name}
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#editModal"
                                style={{marginRight: "5px"}}
                                onClick={() =>
                                    handleEditButtonClick(
                                        category.category_id
                                    )
                                }
                            >
                                <i className="far fa-edit" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() =>
                                    deletecategory(category.category_id)
                                }
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

                        {/* Container Fluid*/}

                        <div className="container-fluid" id="container-wrapper">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">
                                    Danh mục
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
                                        Danh mục
                                    </li>
                                </ol>
                            </div>
                            {/* Row */}
                            <div className="row">
                                {/* DataTable with Hover */}
                                <div className="col-lg-12">
                                    <div className="card mb-4">
                                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">
                                                Danh mục
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
                                            <Table
                                                className="table align-items-center table-flush table-hover"
                                                id="dataTableHover"
                                            >
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th style={{
                                                                textAlign:
                                                                    "left",
                                                            }}>Mã</th>
                                                        <th style={{
                                                                textAlign:
                                                                    "left",
                                                            }}>Tên phương thức</th>
                                                        {/* <th>Ghi chú</th> */}
                                                        <th
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            Hành động
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <CategoryTableBody categorys={categorys} handleEditButtonClick={handleEditButtonClick} deletecategory={deletecategory} />
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Row*/}

                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="modalAdd"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="modalAddTitle"
                                aria-hidden="true"
                            >
                                <div
                                    className="modal-dialog modal-dialog-centered"
                                    role="document"
                                >
                                    <form
                                        className="modal-content"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            addcategory();
                                        }}
                                    >
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="modalAddTitle"
                                            >
                                                Thêm mới danh mục
                                            </h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-12">
                                                <label
                                                    htmlFor="category_name"
                                                    className="form-label"
                                                >
                                                    Tên phương thức
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="category_name"
                                                    placeholder="Tên danh mục mới ..."
                                                    value={category_name}
                                                    onChange={(e) =>
                                                        setcategoryname(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary"
                                                data-dismiss="modal"
                                            >
                                                Hủy bỏ
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Thêm mới
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div
                                className="modal fade"
                                id="editModal"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="editModalTitle"
                                aria-hidden="true"
                            >
                                <div
                                    className="modal-dialog modal-dialog-centered"
                                    role="document"
                                >
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="editModalTitle"
                                            >
                                                Cập nhật danh mục
                                            </h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-12">
                                                <label
                                                    htmlFor="category_name_edit"
                                                    className="form-label"
                                                >
                                                    Tên phương thức
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="category_name_edit"
                                                    placeholder="Cập nhật tên danh mục mới ..."
                                                    value={
                                                        selectedcategory.category_name
                                                    }
                                                    onChange={(e) =>
                                                        setSelectedcategory({
                                                            ...selectedcategory,
                                                            category_name:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            {/* <div className="col-12">
                    <label
                        htmlFor="note_edit"
                        className="form-label"
                    >
                        Ghi chú
                    </label>
                    <textarea
                        className="form-control"
                        id="note_edit"
                        rows={3}
                        defaultValue={selectedcategory.note || ''}
                        onChange={(e) => setSelectedcategory({...selectedcategory, note: e.target.value})}
                    />
                </div> */}
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary"
                                                data-dismiss="modal"
                                            >
                                                Hủy bỏ
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={updatecategory}
                                            >
                                                Cập nhật
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Modal */}
                        </div>

                        {/*-Container Fluid*/}

                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
                {/* Scroll to top */}
                <a href="#page-top" className="scroll-to-top rounded" onClick={handleScrollToTop}>
                    <i className="fas fa-angle-up" />
                </a>
            </div>
        </Fragment>
    );
}
export default Category;
