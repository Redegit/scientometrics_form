import { useEffect, useState } from "react";

export const Modal = ({ data, cb }) => {

    const handleCloseModal = () => {
        cb(false)
    }

    const handleContinue = () => {
        window.location.reload();
    }

    return (
        <div className="modal-background">
            <div className="my-modal" role="dialog">
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
