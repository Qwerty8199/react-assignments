
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-overlay" >
             <button onClick={onClose}> Close </button></div>
        <div className="modal-content">
          {children}
        </div>
      </div>,
      document.getElementById('portal-root')
    );
  };
  
  export default Modal;

