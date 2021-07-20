/* eslint-disable react/prop-types */
import React from 'react';
import FeedScreen from '../../src/components/screens/app/FeedScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';

function FeedPage({ user }) {
  return <FeedScreen user={user} />;
}

export default websitePageHOC(FeedPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Feed',
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);

    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();
  return {
    props: {},
  };
}
