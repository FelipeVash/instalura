import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const WebsitePageContext = React.createContext();

export function WebsitePageContextProvider({ children, messages }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [newPost, setNewPost] = useState(null);

  const modalProps = {
    'data-modal-safe-area': 'true',
  };

  function toggleModal(modalVariant) {
    const hasModalContent = Boolean(modalVariant);
    if (hasModalContent) setModalContent(modalVariant);
    setModalOpen(!isModalOpen);
  }

  function resetModalContent() {
    setModalContent(null);
    setModalOpen(false);
  }

  function getCMSContent(cmsKey) {
    return get(messages, cmsKey);
  }

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModal,
        resetModalContent,
        getCMSContent,
        modalProps,
        modalContent,
        isModalOpen,
        // eslint-disable-next-line object-property-newline
        newPost, setNewPost,
      }}
    >
      {children}
    </WebsitePageContext.Provider>
  );
}

WebsitePageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};

WebsitePageContextProvider.defaultProps = {
  messages: {},
};

export default function useWebsitePageContext() {
  return useContext(WebsitePageContext);
}
