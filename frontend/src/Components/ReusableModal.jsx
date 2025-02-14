import React from "react";
import { Modal } from "react-bootstrap";

const ReusableModal = ({ show, onClose, title, body, footer,  modalsize}) => {
  
  
  return (
    <Modal show={show} onHide={onClose} centered id="verticalycentered" dialogClassName={`modal-${modalsize}`} >
      <Modal.Header closeButton>
        <Modal.Title>
          <i style={{ marginRight: "8px" }} /> 
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {footer || null}
      </Modal.Footer>
    </Modal>
  );
};

export default ReusableModal;