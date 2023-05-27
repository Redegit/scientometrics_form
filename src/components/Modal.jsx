import { useEffect, useState } from "react";

export const Modal = ({ data, cb }) => {

    const handleCloseModal = () => {
        cb(false)
    }

    const handleContinue = () => {
        window.location.reload();
    }

    return (
        <div style={backgroundStyle}>
            <div className="my-modal" style={modalStyle} role="dialog">
                <div className="modal modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{data?.success ? "Успешно!" : "Ошибка"}</h5>
                        </div>
                        <div className="modal-body">
                            <p>{String(data?.message)}</p>
                        </div>
                        <div className="modal-footer">
                            {data?.success
                                ? <button type="button" className="btn btn-primary" onClick={handleContinue}>Продолжить</button>
                                : <button type="button" className="btn btn-secondary" onClick={handleCloseModal} data-bs-dismiss="modal">Назад</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const modalStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "100",
    height: "fit-content",
    width: "fit-content",
    minWidth: "400px"
}

const backgroundStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#33333377",
}
