
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className="modal bg-white p-20 rounded-lg shadow-lg flex fixed top-0 left-0 w-full h-max items-center justify-center z-50">
        <div className="modal-overlay " >
             <button onClick={onClose}> Close </button></div>
        <div className="modal-content">
          {children}
        </div>
      </div>,
      document.getElementById('portal-root')
    );
  };
  
  export default Modal;

