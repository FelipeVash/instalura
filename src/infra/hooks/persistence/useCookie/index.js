/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

export function useCookie(name, data) {
  const [state, setState] = React.useState(() => {
    const cookie = parseCookies(null)[name];

    if (cookie) {
      return cookie;
    }
    return data;
  });

  useEffect(() => {
    setCookie(null, name, state, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    });
  }, [state]);

  return [state, setState];
}
