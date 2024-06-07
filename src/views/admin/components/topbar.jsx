/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
            <Link className="d-flex align-items-center text-decoration-none" to={"/"}>
                <div className="">
                    <img src="assets/images/logo/logo2.png" style={{ width: "45px", height: "45px" }}/>
                </div>
                <div className="mx-2 text-white font-weight-bold fs-4" style={{ width: "30px" }}>
                    RuangAdmin
                </div>
            </Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                    <Link to={"/"} className="nav-link dropdown-toggle">
                        Trang chủ
                    </Link>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Nhân sự
                    </a>
                    <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                    >
                        <h6 className="dropdown-header">Danh mục quản lý</h6>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/admin"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-info">
                                    <i className="fas fa-user-tie text-white" />
                                </div>
                            </div>
                            <div>Nhân viên</div>
                        </Link>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/customer"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-users text-white" />
                                </div>
                            </div>
                            <div>Khách hàng</div>
                        </Link>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Sản phẩm
                    </a>
                    <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                    >
                        <h6 className="dropdown-header">Danh mục quản lý</h6>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/product"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-luggage-cart text-white" />
                                </div>
                            </div>
                            <div>Sản phẩm</div>
                        </Link>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/category"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-dark">
                                    <i className="fas fa-clipboard-list text-white" />
                                </div>
                            </div>
                            <div>Danh mục</div>
                        </Link>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/color"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-palette text-white" />
                                </div>
                            </div>
                            <div>Màu</div>
                        </Link>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/brand"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-clinic-medical text-white" />
                                </div>
                            </div>
                            <div>Thương hiệu</div>
                        </Link>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/size"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-sort-amount-up text-white" />
                                </div>
                            </div>
                            <div>Số đo</div>
                        </Link>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/voucher"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-info">
                                    <i className="fas fa-funnel-dollar text-white" />
                                </div>
                            </div>
                            <div>Mã giảm giá</div>
                        </Link>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Hóa đơn
                    </a>
                    <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                    >
                        <h6 className="dropdown-header">Danh mục quản lý</h6>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/order"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-danger">
                                    <i className="fas fa-receipt text-white" />
                                </div>
                            </div>
                            <div>Hóa đơn</div>
                        </Link>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Phương thức
                    </a>
                    <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                    >
                        <h6 className="dropdown-header">Danh mục quản lý</h6>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/payment"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-comments-dollar text-white" />
                                </div>
                            </div>
                            <div>Thanh toán</div>
                        </Link>
                        <Link
                            className="dropdown-item d-flex align-items-center"
                            to={"/shipping"}
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-info">
                                    <i className="fas fa-dolly-flatbed" />
                                </div>
                            </div>
                            <div>Vận chuyển</div>
                        </Link>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fas fa-bell fa-fw" />
                        <span className="badge badge-danger badge-counter">
                            3+
                        </span>
                    </a>
                    <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown"
                    >
                        <h6 className="dropdown-header">Alerts Center</h6>
                        <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white" />
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">
                                    December 12, 2019
                                </div>
                                <span className="font-weight-bold">
                                    A new monthly report is ready to download!
                                </span>
                            </div>
                        </a>
                        <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white" />
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">
                                    December 7, 2019
                                </div>
                                $290.29 has been deposited into your account!
                            </div>
                        </a>
                        <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                        >
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white" />
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">
                                    December 2, 2019
                                </div>
                                Spending Alert: We've noticed unusually high
                                spending for your account.
                            </div>
                        </a>
                        <a
                            className="dropdown-item text-center small text-gray-500"
                            href="#"
                        >
                            Show All Alerts
                        </a>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="messagesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fas fa-envelope fa-fw" />
                        <span className="badge badge-warning badge-counter">
                            2
                        </span>
                    </a>
                    <div
                        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown"
                    >
                        <h6 className="dropdown-header">Message Center</h6>
                        <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                        >
                            <div className="dropdown-list-image mr-3">
                                <img
                                    className="rounded-circle"
                                    src="assets/images/man.png"
                                    style={{ maxWidth: 60 }}
                                    alt=""
                                />
                                <div className="status-indicator bg-success" />
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">
                                    Hi there! I am wondering if you can help me
                                    with a problem I've been having.
                                </div>
                                <div className="small text-gray-500">
                                    Udin Cilok · 58m
                                </div>
                            </div>
                        </a>
                        <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                        >
                            <div className="dropdown-list-image mr-3">
                                <img
                                    className="rounded-circle"
                                    src="assets/images/girl.png"
                                    style={{ maxWidth: 60 }}
                                    alt=""
                                />
                                <div className="status-indicator bg-default" />
                            </div>
                            <div>
                                <div className="text-truncate">
                                    Am I a good boy? The reason I ask is because
                                    someone told me that people say this to all
                                    dogs, even if they aren't good...
                                </div>
                                <div className="small text-gray-500">
                                    Jaenab · 2w
                                </div>
                            </div>
                        </a>
                        <a
                            className="dropdown-item text-center small text-gray-500"
                            href="#"
                        >
                            Read More Messages
                        </a>
                    </div>
                </li>
                <div className="topbar-divider d-none d-sm-block" />
                <li className="nav-item dropdown no-arrow">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img
                            className="img-profile rounded-circle"
                            src="assets/images/boy.png"
                            style={{ maxWidth: 60 }}
                        />
                        <span className="ml-2 d-none d-lg-inline text-white small">
                            Maman Ketoprak
                        </span>
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                    >
                        <Link className="dropdown-item" to={"/profile"}>
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                            Trang cá nhân
                        </Link>
                        <div className="dropdown-divider" />
                        <Link
                            className="dropdown-item"
                            to={"/login"}
                            data-toggle="modal"
                            data-target="#logoutModal"
                        >
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                            Đăng xuất
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Topbar;
