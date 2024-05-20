/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment } from "react";
import Table from "react-bootstrap/Table";

import database from "../components/database"
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import request from "../../../utils/request";
import { Link } from "react-router-dom";

function Color() {
    const [colors, setcolors] = useState([]);
    const [color, setcolor] = useState("");
    // const [note, setNote] = useState("");
    const [selectedcolorId, setSelectedcolorId] = useState(null);
    const [selectedcolor, setSelectedcolor] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get("color");
                // console.log(response.json(response.data.data.data));
                setcolors(response.data.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let table
        if (colors.length > 0) {
            table = database.initializeDataTable("#dataTableHover")
        }
            return () => {
                if(table) {
                    table.destroy()
                }
            }
    }, [colors]);

    // Add the color
    const addcolor = async () => {
        try {
            const response = await request.post("color", {
                color: color,
            });
            console.log("color added successfully:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("Failed to add color:", error);
        }
    };

    // Update the color
    const handleEditButtonClick = async (color_id) => {
        try {
            // Gọi API để lấy dữ liệu category có id tương ứng
            const response = await request.get(`color/${color_id}`);
            if (response.data) {
                setSelectedcolor(response.data);
                setSelectedcolorId(color_id);
            } else {
                console.error("No data returned from the API");
            }
        } catch (error) {
            console.error("Error while fetching color data:", error);
        }
    };

    const updatecolor = async () => {
        try {
            if (!selectedcolor.color) {
                console.error("Trường màu là bắt buộc.");
                return;
            }

            await request.put(`color/${selectedcolorId}`, {
                // selectedcolor
                color: selectedcolor.color,
            });
            window.location.reload();
        } catch (error) {
            console.error("Error updating color:", error);
        }
    };

    // Delete the color
    const deletecolor = async (color_id) => {
        if (
            window.confirm(
                "Bạn có chắc muốn xóa màu này không?"
            )
        ) {
            try {
                await request.delete(`color/${color_id}`);
                window.location.reload(); // Reload trang sau khi xóa
            } catch (error) {
                console.error("Error deleting color:", error);
            }
        }
    };

    const ColorTableBody = ({
        colors,
        handleEditButtonClick,
        deletecolor,
    }) => {
        return (
            <tbody>
                {colors.map((color, index) => (
                    <tr key={index}>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {color.color_id}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {color.color}
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
                                        color.color_id
                                    )
                                }
                            >
                                <i className="far fa-edit" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() =>
                                    deletecolor(color.color_id)
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
                                    Danh mục màu 
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
                                        Danh mục màu 
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
                                                Danh sách màu 
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
                                                            }}>Tên màu</th>
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
                                                <ColorTableBody colors={colors} handleEditButtonClick={handleEditButtonClick} deletecolor={deletecolor} />
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
                                            addcolor();
                                        }}
                                    >
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="modalAddTitle"
                                            >
                                                Thêm mới màu 
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
                                                    htmlFor="color"
                                                    className="form-label"
                                                >
                                                    Tên màu
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="color"
                                                    placeholder="Tên màu mới ..."
                                                    value={color}
                                                    onChange={(e) =>
                                                        setcolor(
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
                                                Cập nhật màu 
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
                                                    htmlFor="color_edit"
                                                    className="form-label"
                                                >
                                                    Tên màu
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="color_edit"
                                                    placeholder="Cập nhật tên màu  mới ..."
                                                    value={
                                                        selectedcolor.color
                                                    }
                                                    onChange={(e) =>
                                                        setSelectedcolor({
                                                            ...selectedcolor,
                                                            color:
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
                        defaultValue={selectedcolor.note || ''}
                        onChange={(e) => setSelectedcolor({...selectedcolor, note: e.target.value})}
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
                                                onClick={updatecolor}
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
export default Color;
