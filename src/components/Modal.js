import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Modal = ({ show, children, handleClose }) => {
  const handleClickClose = e => {
    if (e.target.classList.contains("ModalContainer")) {
      handleClose();
    }
  };
  const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    display: ${() => (show ? "block" : "none")};
  `;

  const ModalContent = styled.div`
    position: fixed;
    background-color: white;
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 80%;
    }
  `;

  return (
    <ModalContainer
      onClick={handleClickClose}
      display={show ? "block" : "none"}
      className="ModalContainer"
    >
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};

export default Modal;