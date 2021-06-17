import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
// Back End de Dev
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
// Back end de Prod
  : 'https://instalura-api.omariosouto.vercel.app';

// eslint-disable-next-line import/prefer-default-export
export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return {
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
};
