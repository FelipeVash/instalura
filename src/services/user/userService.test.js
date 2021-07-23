import userService from './userService';

const token = 'fake-token';
const fakePostsArr = ['post1', 'post2', 'post3'];
const fakeSession = { id: 'fake-sessionId' };
const fakeUserData = { name: 'someName', username: 'someUsername' };

const getAuthMockObject = () => {
  const authMockObject = {
    getToken: jest.fn(),
    getSession: jest.fn(),
  };

  authMockObject.getToken.mockReturnValue(token);
  authMockObject.getSession.mockReturnValue({ ...fakeSession });

  return authMockObject;
};

describe('userService', () => {
  describe('getUserData()', () => {
    test('returns session and userData', async () => {
      const authObject = getAuthMockObject();
      const authServiceModule = () => authObject;
      const HttpClientModule = async () => ({ ...fakeUserData });
      const fakeResponse = await userService.getUserData(
        null, HttpClientModule, authServiceModule,
      );
      expect(authObject.getSession).toBeCalledTimes(1);
      expect(fakeResponse).toMatchObject({ ...fakeSession, ...fakeUserData });
    });
  });

  describe('getPostData()', () => {
    test('returns the reversed posts array', async () => {
      const authObject = getAuthMockObject();
      const authServiceModule = () => authObject;
      const HttpClientModule = async () => ({ data: [...fakePostsArr] });
      const fakeResponse = await userService.getPostsData(
        null, HttpClientModule, authServiceModule,
      );
      expect(authObject.getToken).toBeCalledTimes(1);
      expect(fakeResponse[0]).toMatch(fakePostsArr[2]);
    });

    test('throws an error when failed to get the data', async () => {
      const authObject = getAuthMockObject();
      const authServiceModule = () => authObject;
      const HttpClientModule = async () => ({ data: null });
      await expect(userService.getPostsData(
        null, HttpClientModule, authServiceModule,
      ))
        .rejects
        .toThrow('Failed to get the posts data');
      expect(authObject.getToken).toBeCalledTimes(1);
    });
  });

  describe('sendNewPost()', () => {
    test('returns the new post data', async () => {
      const authObject = getAuthMockObject();
      const authServiceModule = () => authObject;
      const fakePostId = 'fakePostId';
      const postData = {
        photoUrl: 'postPhotoUrl',
        description: 'postDescription',
        filter: 'postFilter',
      };
      const HttpClientModule = (url, { body }) => ({
        data: {
          id: fakePostId,
          photoUrl: body.photoUrl,
          description: body.description,
          filter: body.filter,
        },
      });
      const fakeResponse = await userService.sendNewPost(
        postData, HttpClientModule, authServiceModule,
      );
      expect(authObject.getToken).toBeCalledTimes(1);
      expect(fakeResponse).toMatchObject({ ...postData, id: fakePostId });
    });

    test('throws an error when failed to create a new post', async () => {
      const authObject = getAuthMockObject();
      const authServiceModule = () => authObject;
      const HttpClientModule = async () => ({ data: null });
      await expect(userService.sendNewPost(
        {}, HttpClientModule, authServiceModule,
      ))
        .rejects
        .toThrow('Failed to create a new post');
      expect(authObject.getToken).toBeCalledTimes(1);
    });
  });

  describe('likePost()', () => {
    describe('when user likes a post', () => {
      test('returns the liked post data', async () => {
        const authObject = getAuthMockObject();
        const authServiceModule = () => authObject;
        const fakePostId = 'fakePostId';
        const fakePostData = {
          id: fakePostId,
          photoUrl: 'postPhotoUrl',
          description: 'postDescription',
          filter: 'postFilter',
        };

        const HttpClientModule = async () => ({ data: { ...fakePostData } });

        const fakeResponse = await userService.likePost(
          fakePostId, HttpClientModule, authServiceModule,
        );
        expect(authObject.getToken).toBeCalledTimes(1);
        expect(fakeResponse).toMatchObject(fakePostData);
      });
    });

    describe('when user unlikes a post', () => {
      test('the response should not contain a data object', async () => {
        const authObject = getAuthMockObject();
        const authServiceModule = () => authObject;
        const fakePostId = 'fakePostId';

        const HttpClientModule = async () => ({ data: null });

        const fakeResponse = await userService.likePost(
          fakePostId, HttpClientModule, authServiceModule,
        );
        expect(authObject.getToken).toBeCalledTimes(1);
        expect(fakeResponse).toBe(null);
      });
    });
  });
});
