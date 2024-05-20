import React from "react";

const Footer = () => {
    return (
        <>
            {/* Modal Logout */}
            <div
                className="modal fade"
                id="logoutModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabelLogout"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLabelLogout"
                            >
                                Ohh No!
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
                            <p>Are you sure you want to logout?</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <a href="login.html" className="btn btn-primary">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © , All rights Reserved</span>
                    </div>
                </div>
            </footer>
            {/* Footer */}
        </>
    );
};
export default Footer;
