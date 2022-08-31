import React from 'react'

function Toast() {
    return (
        <div className="toast show">
            <div className="toast-header">
                Toast Header
                <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div className="toast-body">
                Some text inside the toast body
            </div>
        </div>
    )
}

export default Toast