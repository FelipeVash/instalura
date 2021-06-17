import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import { loginService, LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';
import { HttpClient } from '../../infra/http/HttpClient';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

const BASE_URL = isStagingEnv
  // Back End de Dev
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Back end de Prod
  : 'https://instalura-api.omariosouto.vercel.app';

// eslint-disable-next-line import/prefer-default-export
export const authService = (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];

  return {
    async getToken() {
      return token;
    },
    async hasActiveSession() {
      return HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          if (data.authenticated) {
            return true;
          }

          loginService.logout(ctx);
          return false;
        })
        .catch(() => {
          loginService.logout(ctx);
          return false;
        });
    },
    async getSession() {
      const session = jwt.decode(token);
      return session.user;
    },
  };
};
