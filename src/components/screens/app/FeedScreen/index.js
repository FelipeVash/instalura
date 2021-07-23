/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';
import Link from '../../../commons/Link';
import PostImage from '../../../commons/PostImage';
import useWebsitePageContext from '../../../wrappers/WebsitePage/context';
import PostLikeButton from '../ProfileScreen/PostLikeButton';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const FeedBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  ${breakpointsMedia({
    md: css`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    `,
  })}
`;

const PostsList = styled.ul`
  background-color: #191919;
  border:solid white;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 10px;
  width: 100%;
  ${breakpointsMedia({
    md: css`
      width:100%;
      margin-right: 20px;
    `,
  })}
`;

const FriendBox = styled.ul`
  display: none;
  ${breakpointsMedia({
    md: css`
      align-items: center;
      background-color: #191919;
      border:solid white;
      display: flex;
      border-radius: 15px;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      padding: 10px;
      width:25%;
    `,
  })}
`;

const PostCard = styled(Box)`
  font-size: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #292929;
  border: solid white;
  border-radius: 15px;
  padding:15px;
  margin:15px;
  & > div {
    position: relative;
  }
  div {
    display: flex;
    align-items: center;
    .Avatar {
      margin: 15px;
      min-width: 50px;
      width: 20%;
      height: fit-content;
      border: solid white;
      border-radius: 100%;
    }
  }
  ${breakpointsMedia({
    md: css`
      min-width: 25%;
      max-width: 26%;
      div {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .Avatar {
          min-width: 80px;
          margin: 1.5%;
        }
      }
    `,
  })}
`;

const FollowingCard = styled(Box)`
  background-color: #292929;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  margin:1.5%;
  padding: 1%;
  border: solid white;
  border-radius: 15px;
  a {
    align-items: center;
    display:flex;
    flex-direction: column;
    min-width:40px;
    max-width: 120px;
    min-height: 40px;
    padding: 10px;
    justify-content: center;
    .Avatar {
      min-width: 50px;
      width: 25%;
      border: solid white;
      border-radius: 100%;
    }
    p {
      display: none;
      ${breakpointsMedia({
        md: css`
          display: flex;
        `,
      })}
    }
  }
`;
export default function FeedScreen({
 user,
 posts,
 followingConvert,
 friendData,
 friendPosts,
}) {
  const { newPost } = useWebsitePageContext();
  const [postList, setPostList] = useState(friendPosts);
  useEffect(() => {
    if (!newPost) return undefined;
    if (newPost._id !== postList[0]._id) setPostList([newPost, ...postList]);
    return undefined;
  }, [newPost]);

  const [following, setFollowing] = useState(followingConvert);

  return (
    <FeedBox
      as="main"
      backgroundColor="#292929"
    >
      <PostsList>
        {postList.map((post, index) => (
          <PostCard
            as="li"
            key={post._id}
            data={`description-${post.description}`}
          >
            <div>
              <img className="Avatar" src={`https://github.com/${friendData.username}.png`} alt={`Foto de avatar do usuario ${friendData.name}`} />
              <Text
                as="p"
                color="tertiary.main"
              >
                {friendData.name}
              </Text>
            </div>
            <div styles={{ width: '100%' }}>
              <PostImage
                imgSrc={post.photoUrl}
                filterClass={post.filter}
                alt="Imagem do post"
              />
              <PostLikeButton
                postList={postList}
                post={post}
                index={index}
                user={friendData}
                setPostList={setPostList}
              />
            </div>
          </PostCard>
            ))}
      </PostsList>
      <FriendBox
        backgroundColor="#191919"
      >
        <Text
          as="h2"
          variant="title"
          color="tertiary.main"
        >
          Seguindo
        </Text>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {following.map((followee) => (
            <FollowingCard
              as="li"
              key={followee.id}
              data={`description-${followee.login}`}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding="10px"
                width="100%"
              >
                <Link
                  href={`https://github.com/${followee.login}`}
                >
                  <img className="Avatar" src={`https://github.com/${followee.login}.png`} alt={`Foto de avatar do usuario ${followee.login}`} />
                  <Text
                    as="p"
                    variant="text"
                    color="tertiary.main"
                  >
                    {followee.login}
                  </Text>
                </Link>
              </Box>
            </FollowingCard>
          ))}
        </Box>
      </FriendBox>
    </FeedBox>
  );
}

FeedScreen.propTypes = {
  friendPosts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      photoUrl: PropTypes.string,
      description: PropTypes.string,
      likes: PropTypes.arrayOf(PropTypes.shape({
        user: PropTypes.string,
        _id: PropTypes.string,
      })),
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      __v: PropTypes.number,
    }),
  ).isRequired,

  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    role: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,

  friendData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    role: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,
};
