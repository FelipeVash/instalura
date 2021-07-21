import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import useWebsitePageContext from '../../wrappers/WebsitePage/context';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: scroll;
  transition: 300ms;
  z-index: 100;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Modal() {
  const {
    toggleModal,
    modalContent,
    isModalOpen,
  } = useWebsitePageContext();

  return (
    <ModalWrapper
      isOpen={isModalOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area]');
        if (!isSafeArea) toggleModal();
      }}
    >

      {isModalOpen && <LockScroll />}

      <motion.div
        variants={{
          open: {
            x: '0',
          },
          closed: {
            x: '100%',
          },
        }}
        animate={isModalOpen ? 'open' : 'closed'}
        transition="500ms"
        style={{
          display: 'flex',
          flex: '1',
        }}
      >
        {modalContent}
      </motion.div>
    </ModalWrapper>
  );
}
