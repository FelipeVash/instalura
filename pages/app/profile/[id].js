/* eslint-disable react/prop-types */
import React from 'react';
import UserScreen from '../../../src/components/screens/app/UserScreen';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';

function OtherUsersProfilePage() {
  return <UserScreen userInfo={[]} posts={[]} />;
}

export default websitePageHOC(OtherUsersProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perfil',
    },
  },
});
