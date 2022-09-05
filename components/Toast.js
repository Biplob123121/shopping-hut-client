import React from 'react'

function Toast({ msg, handleShow, bgColor }) {
    return (
        <div className={`toast show position-fixed text-light ${bgColor}`} style={{ top: '5px', right: '5px', xIndex: 9, minWidth: '280px' }} data-autohide="false">
            <div className={`toast-header ${bgColor} text-light`}>
                <strong className='mr-auto text-light'>{msg.title}</strong>
                <button type="button" className="close text-light" data-bs-dismiss="toast" style={{ outline: 'none' }} onClick={handleShow}>x</button>
            </div>
            <div className="toast-body">
                {msg.msg}
            </div>
        </div>
    )
}

export default Toast