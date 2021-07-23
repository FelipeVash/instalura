import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import ProfileScreen from '../../src/components/screens/app/ProfileScreen';
import authService from '../../src/services/auth/authService';
import userService from '../../src/services/user/userService';
import { getUserData } from '../api/user';

export default websitePageHOC(ProfileScreen, {
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
    return {
      props: {
        user: {
          ...user,
          ...session,
        },
        posts,
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
