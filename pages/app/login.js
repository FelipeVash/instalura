import LoginScreen from '../../src/components/screens/app/LoginScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});

export function getServerSideProps() {
  return {
    props: {
      pageWrapperProps: {
        pageBoxProps: {
          backgroundImage: 'url(/images/bubbles.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
        },
      },
    },
  };
}
