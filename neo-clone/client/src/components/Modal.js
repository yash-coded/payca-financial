import styled from "styled-components";
import { space, layout } from "styled-system";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled(motion.div)`
  /* width: 90%; */
  /* height: 50%; */
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  overflow-y: scroll;

  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: white;
  ${space}
  ${layout}
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: {
    top: "60%",
    opacity: 0,
    transition: { type: "spring" },
  },
  isOpen: { top: "50%", opacity: 1 },
  exit: { top: "60%", opacity: 0 },
};

const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <>
            <Overlay
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={modalVariant}
              onClick={handleClose}
            >
              <ModalContainer
                variants={containerVariant}
                width={["80%", "60%", "50%", "30%"]}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </ModalContainer>
            </Overlay>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default Modal;
