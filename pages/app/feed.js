/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow-callback */
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import FeedScreen from '../../src/components/screens/app/FeedScreen';
import authService from '../../src/services/auth/authService';
import userService from '../../src/services/user/userService';
import { getUserData } from '../api/user';

export default websitePageHOC(FeedScreen, {
  pageWrapperProps: {
    menuProps: {
      display: true,
      variant: 'app',
    },
    footerProps: {
      display: true,
    },
    pageBoxProps: {
      backgroundColor: 'background.main',
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await authService(ctx).getSession();
    const user = await getUserData(session.id);
    const posts = await userService.getPostsData(ctx);
    const friendData = await getUserData('5fe9035f5bb019a3c62572da');
    const friendPosts = await userService.getFriendPosts();
    const userFollowing = await fetch(`https://api.github.com/users/${user.username}/following`);
    const followingConvert = await userFollowing.json();

    return {
      props: {
        user: {
          ...user,
          ...session,
        },
        posts,
        followingConvert,
        friendData,
        friendPosts,
        pageWrapperProps: {
          seoProps: {
            headTitle: user.username,
          },
        },
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}
