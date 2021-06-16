import AboutScreen from '../src/components/screens/AboutScreen';
import getContent from '../src/components/screens/AboutScreen/getContent';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps({ preview }) {
  const messages = await getContent({ preview });

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
