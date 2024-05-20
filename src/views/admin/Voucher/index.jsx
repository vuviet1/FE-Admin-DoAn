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

function Voucher() {
    const [vouchers, setvouchers] = useState([]);
    const [voucher, setvoucher] = useState("");
    const [quantity, setquantity] = useState("");
    const [start_day, setstartday] = useState(null);
    const [end_day, setendday] = useState(null);
    // const [note, setNote] = useState("");
    const [selectedvoucherId, setSelectedvoucherId] = useState(null);
    const [selectedvoucher, setSelectedvoucher] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get("voucher");
                setvouchers(response.data.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let table
        if (vouchers.length > 0) {
            table = database.initializeDataTable("#dataTableHover")
        }
            return () => {
                if(table) {
                    table.destroy()
                }
            }
    }, [vouchers]);

    // Add the voucher
    const addvoucher = async () => {
        try {
            const response = await request.post("voucher", {
                voucher: voucher,
            });
            console.log("voucher  added successfully:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("Failed to add voucher :", error);
        }
    };

    // Update the voucher
    const handleEditButtonClick = async (voucher_id) => {
        try {
            // Gọi API để lấy dữ liệu category có id tương ứng
            const response = await request.get(`voucher/${voucher_id}`);
            if (response.data) {
                setSelectedvoucher(response.data);
                setSelectedvoucherId(voucher_id);
            } else {
                console.error("No data returned from the API");
            }
        } catch (error) {
            console.error("Error while fetching voucher data:", error);
        }
    };

    const updatevoucher = async () => {
        try {
            if (!selectedvoucher.voucher) {
                console.error("Trường mã giảm giá là bắt buộc.");
                return;
            }

            await request.put(`voucher/${selectedvoucherId}`, {
                // selectedvoucher
                voucher: selectedvoucher.voucher,
            });
            window.location.reload();
        } catch (error) {
            console.error("Error updating voucher:", error);
        }
    };

    // Delete the voucher
    const deletevoucher = async (voucher_id) => {
        if (window.confirm("Bạn có chắc muốn xóa mã giảm giá này không?")) {
            try {
                await request.delete(`voucher/${voucher_id}`);
                window.location.reload(); // Reload trang sau khi xóa
            } catch (error) {
                console.error("Error deleting voucher:", error);
            }
        }
    };

    const VoucherTableBody = ({
        vouchers,
        handleEditButtonClick,
        deletevoucher,
    }) => {
        return (
            <tbody>
                {vouchers.map((voucher, index) => (
                    <tr key={index}>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {voucher.voucher_id}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {voucher.voucher}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {voucher.quantity}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {voucher.start_day}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {voucher.end_day}
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#editModal"
                                style={{ marginRight: "5px" }}
                                onClick={() =>
                                    handleEditButtonClick(voucher.voucher_id)
                                }
                            >
                                <i className="far fa-edit" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() =>
                                    deletevoucher(voucher.voucher_id)
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
                                    Mã giảm giá
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
                                        Danh mục mã giảm giá
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
                                                Danh sách mã giảm giá
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
                                                            Tên mã giảm giá
                                                        </th>
                                                        <th
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            Số lượng
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
                                                <VoucherTableBody
                                                    vouchers={vouchers}
                                                    handleEditButtonClick={
                                                        handleEditButtonClick
                                                    }
                                                    deletevoucher={
                                                        deletevoucher
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
                                            addvoucher();
                                        }}
                                    >
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="modalAddTitle"
                                            >
                                                Thêm mới mã giảm giá
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
                                                    htmlFor="voucher"
                                                    className="form-label"
                                                >
                                                    Tên mã giảm giá
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="voucher"
                                                    placeholder="Tên mã giảm giá mới ..."
                                                    value={voucher}
                                                    onChange={(e) =>
                                                        setvoucher(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="quantity"
                                                    className="form-label"
                                                >
                                                    Số lượng
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="quantity"
                                                    placeholder="Nhập số lượng mã giảm giá ..."
                                                    value={quantity}
                                                    onChange={(e) =>
                                                        setquantity(
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
                                                Cập nhật mã giảm giá
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
                                                    htmlFor="voucher_edit"
                                                    className="form-label"
                                                >
                                                    Tên mã giảm giá
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="voucher_edit"
                                                    placeholder="Cập nhật tên mã giảm giá mới ..."
                                                    value={
                                                        selectedvoucher.voucher
                                                    }
                                                    onChange={(e) =>
                                                        setSelectedvoucher({
                                                            ...selectedvoucher,
                                                            voucher:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="voucher_edit"
                                                    className="form-label"
                                                >
                                                    Số lượng
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Cập nhật số lượng mã giảm giá ..."
                                                    value={
                                                        selectedvoucher.quantity
                                                    }
                                                    onChange={(e) =>
                                                        setSelectedvoucher({
                                                            ...selectedvoucher,
                                                            quantity:
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
                        defaultValue={selectedvoucher.note || ''}
                        onChange={(e) => setSelectedvoucher({...selectedvoucher, note: e.target.value})}
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
                                                onClick={updatevoucher}
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
export default Voucher;
