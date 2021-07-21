import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import authService from '../auth/authService';

const EXTERNAL_URL = isStagingEnv
  ? 'https://instalura-api.vercel.app'
  : 'https://instalura-api.vercel.app';

const userService = {
  async getUserData(
    ctx,
    HttpClientModule = HttpClient,
    authServiceModule = authService,
  ) {
    const session = await authServiceModule(ctx).getSession();
    const userData = await HttpClientModule('/api/user', {
      method: 'POST',
      body: {
        id: session.id,
      },
    });

    return {
      ...session,
      ...userData,
    };
  },

  async getPostsData(
    ctx,
    HttpClientModule = HttpClient,
    authServiceModule = authService,
  ) {
    const url = `${EXTERNAL_URL}/api/users/posts`;
    const token = await authServiceModule(ctx).getToken();
    const response = await HttpClientModule(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (!response.data) throw new Error('Failed to get the posts data');
    return response.data.reverse();
  },

  async sendNewPost(
    { photoUrl, description, filter },
    HttpClientModule = HttpClient,
    authServiceModule = authService,
  ) {
    const url = `${EXTERNAL_URL}/api/posts`;
    const token = await authServiceModule().getToken();
    const response = await HttpClientModule(url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: {
        photoUrl,
        description,
        filter,
      },
    });
    if (!response.data) throw new Error('Failed to create a new post');
    return response.data;
  },

  async likePost(
    postId,
    HttpClientModule = HttpClient,
    authServiceModule = authService,
  ) {
    const url = `${EXTERNAL_URL}/api/posts/${postId}/like`;
    const token = await authServiceModule().getToken();
    const response = await HttpClientModule(url, {
      method: 'POST',
      'Content-Type': 'application/json',
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: {},
    });
    return response.data;
  },
};

export default userService;
