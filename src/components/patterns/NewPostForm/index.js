/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button, { IconButton } from '../../commons/Button';
import useWebsitePageContext from '../../wrappers/WebsitePage/context';
import { Box } from '../../foundation/layout/Box';
import PostImage from '../../commons/PostImage';
import NewPostWrapper from './NewPostWrapper';
import ImageUrlInput from './ImageUrlInput';
import FilterOptions from './FilterOptions';
import DescriptionInput from './DescriptionInput';
import userService from '../../../services/user/userService';
import Text from '../../foundation/Text';

const BackButton = styled(IconButton)`
  position: absolute;
  top: 12px;
  left: 12px;
  transform: rotate(180deg);
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const ErrorMessage = styled(Text)`
  text-align: center;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

const postStates = {
  imgSelection: 'imgSelection',
  filterSelection: 'filterSelection',
  describing: 'describing',
  posting: 'posting',
};

const postStatesSteps = Object.keys(postStates);
const lastStep = postStatesSteps.length - 2;

export default function NewPostForm() {
  const {
    modalProps,
    toggleModal,
    setNewPost,
    resetModalContent,
  } = useWebsitePageContext();

  const [postState, setPostState] = useState(postStates.imgSelection);
  const [imgSrc, setImgSrc] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [description, setDescription] = useState('');
  const errorMessage = useRef('');

  useEffect(() => {
    errorMessage.current = '';
  }, [postState]);

  const isDisabled = (postState === postStates.imgSelection && !imgSrc)
    || (postState === postStates.filterSelection && !filterClass);

  const isImgSelection = postState === postStates.imgSelection;
  const isFilterSelection = postState === postStates.filterSelection;
  const isDescribing = postState === postStates.describing;
  const isPosting = postState === postStates.posting;
  const hasError = Boolean(errorMessage.current);

  async function submitNewPost() {
    setPostState(postStates.posting);
    await userService.sendNewPost({
      photoUrl: imgSrc,
      description,
      filter: filterClass,
    })
      .then((post) => {
        setNewPost(post);
        resetModalContent();
      })
      .catch(() => {
        errorMessage.current = 'Não foi possível criar o post.';
        setPostState(postStatesSteps[lastStep]);
      });
  }

  function onNext() {
    const postNewStateIndex = postStatesSteps.indexOf(postState) + 1;
    if (postState === postStatesSteps[lastStep]) submitNewPost();
    else setPostState(postStatesSteps[postNewStateIndex]);
  }

  function onBack() {
    const postNewStateIndex = postStatesSteps.indexOf(postState) - 1;

    if (isFilterSelection) setFilterClass('');
    if (isDescribing) setDescription('');

    setPostState(postStatesSteps[postNewStateIndex]);
  }

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flex="1"
    >
      <NewPostWrapper
        id="newPostForm"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...modalProps}
      >
        {!(isImgSelection || isPosting) && (
          <BackButton type="button" onClick={onBack}>
            <img src="/icons/arrow-right-dark.svg" alt="Voltar" />
          </BackButton>
        )}

        <CloseButton type="button" onClick={() => toggleModal()}>
          <img src="/icons/xIcon.svg" alt="Fechar" />
        </CloseButton>

        <PostImage imgSrc={imgSrc} filterClass={filterClass} alt="Imagem escolhida" />

        {isImgSelection && (
          <ImageUrlInput
            imgSrc={imgSrc}
            setImgSrc={setImgSrc}
          />
        )}

        {(isFilterSelection) && (
          <FilterOptions
            imgSrc={imgSrc}
            filterClass={filterClass}
            setFilterClass={setFilterClass}
          />
        )}

        {(isDescribing || isPosting) && (
          <DescriptionInput
            description={description}
            setDescription={setDescription}
          />
        )}

        <Box
          padding="0 24px"
        >
          <Button
            variant="primary.main"
            fullWidth
            onClick={onNext}
            disabled={isDisabled}
            type="button"
            name="nextStepBtn"
          >
            {postState === postStatesSteps[lastStep] || isPosting
              ? 'Postar'
              : 'Avançar'}
          </Button>

          {hasError && (
            <ErrorMessage
              color="error"
            >
              {errorMessage.current}
            </ErrorMessage>
          )}
        </Box>
      </NewPostWrapper>
    </Box>
  );
}
