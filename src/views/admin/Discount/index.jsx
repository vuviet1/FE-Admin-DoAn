/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment } from "react";
import Table from "react-bootstrap/Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import database from "../components/database"
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import request from "../../../utils/request";
import { Link } from "react-router-dom";

function Discount() {
    const [discounts, setdiscounts] = useState([]);
    const [discount, setdiscount] = useState("");
    const [start_day, setstartday] = useState(null);
    const [end_day, setendday] = useState(null);
    // const [note, setNote] = useState("");
    const [selecteddiscountId, setSelecteddiscountId] = useState(null);
    const [selecteddiscount, setSelecteddiscount] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get("discount");
                setdiscounts(response.data.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let table
        if (discounts.length > 0) {
            table = database.initializeDataTable("#dataTableHover")
        }
            return () => {
                if(table) {
                    table.destroy()
                }
            }
    }, [discounts]);

    // Add the discount
    const adddiscount = async () => {
        try {
            const response = await request.post("discount", {
                discount: discount,
            });
            console.log("discount  added successfully:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("Failed to add discount :", error);
        }
    };

    // Update the discount
    const handleEditButtonClick = async (discount_id) => {
        try {
            // Gọi API để lấy dữ liệu category có id tương ứng
            const response = await request.get(`discount/${discount_id}`);
            if (response.data) {
                setSelecteddiscount(response.data);
                setSelecteddiscountId(discount_id);
            } else {
                console.error("No data returned from the API");
            }
        } catch (error) {
            console.error("Error while fetching discount data:", error);
        }
    };

    const updatediscount = async () => {
        try {
            if (!selecteddiscount.discount) {
                console.error("Trường Sản phẩm khuyến mãi là bắt buộc.");
                return;
            }

            await request.put(`discount/${selecteddiscountId}`, {
                // selecteddiscount
                discount: selecteddiscount.discount,
            });
            window.location.reload();
        } catch (error) {
            console.error("Error updating discount:", error);
        }
    };

    // Delete the discount
    const deletediscount = async (discount_id) => {
        if (window.confirm("Bạn có chắc muốn xóa Sản phẩm khuyến mãi này không?")) {
            try {
                await request.delete(`discount/${discount_id}`);
                window.location.reload(); // Reload trang sau khi xóa
            } catch (error) {
                console.error("Error deleting discount:", error);
            }
        }
    };

    const DiscountTableBody = ({
        discounts,
        handleEditButtonClick,
        deletediscount,
    }) => {
        return (
            <tbody>
                {discounts.map((discount, index) => (
                    <tr key={index}>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {discount.discount_id}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {discount.discount}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {discount.start_day}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {discount.end_day}
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#editModal"
                                style={{ marginRight: "5px" }}
                                onClick={() =>
                                    handleEditButtonClick(discount.discount_id)
                                }
                            >
                                <i className="far fa-edit" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() =>
                                    deletediscount(discount.discount_id)
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
                                    Sản phẩm khuyến mãi
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
                                        Danh mục Sản phẩm khuyến mãi
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
                                                Danh sách Sản phẩm khuyến mãi
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
                                                        <th
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            Mã
                                                        </th>
                                                        <th
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            Tên Sản phẩm khuyến mãi
                                                        </th>
                                                        <th
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            Ngày bắt đầu
                                                        </th>
                                                        <th
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            Ngày kết thúc
                                                        </th>
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
                                                <DiscountTableBody
                                                    discounts={discounts}
                                                    handleEditButtonClick={
                                                        handleEditButtonClick
                                                    }
                                                    deletediscount={
                                                        deletediscount
                                                    }
                                                />
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
                                            adddiscount();
                                        }}
                                    >
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="modalAddTitle"
                                            >
                                                Thêm mới Sản phẩm khuyến mãi
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
                                                    htmlFor="discount"
                                                    className="form-label"
                                                >
                                                    Tên Sản phẩm khuyến mãi
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="discount"
                                                    placeholder="Tên Sản phẩm khuyến mãi mới ..."
                                                    value={discount}
                                                    onChange={(e) =>
                                                        setdiscount(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="col-12 form-group"
                                                id="simple-date4"
                                                style={{ display: "block" }}
                                            >
                                                <label
                                                    htmlFor="dateRangePicker"
                                                    className="form-label"
                                                >
                                                    Từ ngày - Đến ngày
                                                </label>
                                                <div className="input-daterange input-group">
                                                    <div className="col-md-5">
                                                        <DatePicker
                                                            className="form-control input-sm"
                                                            selected={start_day}
                                                            onChange={(date) =>
                                                                setstartday(
                                                                    date
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="input-group-prepend col-md-2">
                                                        <span className="input-group-text">
                                                            đến
                                                        </span>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <DatePicker
                                                            className="form-control "
                                                            selected={end_day}
                                                            onChange={(
                                                                date
                                                            ) => {
                                                                if (
                                                                    date <
                                                                    start_day
                                                                ) {
                                                                    alert(
                                                                        "Ngày kết thúc phải lớn hơn ngày bắt đầu."
                                                                    );
                                                                } else {
                                                                    setendday(
                                                                        date
                                                                    );
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
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
                                                Cập nhật Sản phẩm khuyến mãi
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
                                                    htmlFor="discount_edit"
                                                    className="form-label"
                                                >
                                                    Tên Sản phẩm khuyến mãi
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="discount_edit"
                                                    placeholder="Cập nhật tên Sản phẩm khuyến mãi mới ..."
                                                    value={
                                                        selecteddiscount.discount
                                                    }
                                                    onChange={(e) =>
                                                        setSelecteddiscount({
                                                            ...selecteddiscount,
                                                            discount:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div
                                                className="col-12 form-group"
                                                id="simple-date1"
                                            >
                                                <label htmlFor="simpleDataInput">
                                                    Ngày bắt đầu
                                                </label>
                                                <div className="input-group date">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fas fa-calendar" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="01/06/2020"
                                                        id="simpleDataInput"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className="col-12 form-group"
                                                id="simple-date1"
                                            >
                                                <label htmlFor="simpleDataInput">
                                                    Ngày kết thúc
                                                </label>
                                                <div className="input-group date">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fas fa-calendar" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="01/06/2020"
                                                        id="simpleDataInput"
                                                    />
                                                </div>
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
                        defaultValue={selecteddiscount.note || ''}
                        onChange={(e) => setSelecteddiscount({...selecteddiscount, note: e.target.value})}
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
                                                onClick={updatediscount}
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
export default Discount;
