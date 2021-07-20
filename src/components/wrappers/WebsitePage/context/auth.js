/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';
// import auth from '../../../../services/auth/authService';

export const AuthContext = createContext({
  hasActiveSession: false,
  user: {},
  posts: [],
  setPosts: () => {},
});
