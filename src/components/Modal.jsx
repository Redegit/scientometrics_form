export const Modal = (success, message) => {

    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{success ? "Успешно!" : "Ошибка"}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{String(message)}</p>
                    </div>
                    <div className="modal-footer">
                        {success
                            ? <button type="button" className="btn btn-primary">Продолжить</button>
                            : <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Назад</button>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}
