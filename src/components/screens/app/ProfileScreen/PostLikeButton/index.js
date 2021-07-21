/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import userService from '../../../../../services/user/userService';
import Button from '../../../../commons/Button';
import likeAnimation from './animations/like.json';
import Text from '../../../../foundation/Text';

const PostLikeButtonWrapper = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  width: 100%;
  opacity: 0;
  border-radius: 0;
  color: initial;
  transition: 400ms;
  &:hover, &:focus {
    opacity: 0.75;
  }

  .animationBox {
    margin: -20px;
  }
`;

export default function PostLikeButton({
  postList, post, index, user, setPostList,
}) {
  const [hasLiked, setHasLiked] = useState(post.likes.find((like) => like.user === user.id));

  function addLike(updatedPost) {
    const tempPostList = [...postList];
    tempPostList[index].likes = updatedPost.likes;
    setPostList(tempPostList);
  }

  function removeLike() {
    const tempPostList = [...postList];
    tempPostList[index].likes = tempPostList[index].likes.filter(
      (like) => like.user !== user.id,
    );
    setPostList(tempPostList);
  }

  async function likePost() {
    setHasLiked(!hasLiked);
    const updatedPost = await userService.likePost(post._id);
    const hasUpdatedPostData = Boolean(updatedPost);
    if (hasUpdatedPostData) addLike(updatedPost);
    else removeLike();
  }

  return (
    <PostLikeButtonWrapper
      type="button"
      onClick={likePost}
    >
      {hasLiked ? (
        <Lottie
          className="animationBox"
          width="70px"
          height="70px"
          config={{ animationData: likeAnimation, loop: false, autoplay: true }}
        />
      )
        : (
          <img src="/icons/heart.svg" alt="Heart post" />
        )}
      {/* https://lottiefiles.com/6974-like-heart-animation */}
      <Text
        tag="span"
        variant="subTitle"
      >
        {post.likes.length}
      </Text>
    </PostLikeButtonWrapper>
  );
}

PostLikeButton.propTypes = {
  postList: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  setPostList: PropTypes.func.isRequired,
};
