import { HttpClient } from '../../src/infra/http/HttpClient';

const url = 'https://instalura-api.vercel.app/api/users';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(501).json({ message: 'Utilize o método: POST' });
    return;
  }

  if (!req.body.searchArg) {
    res.status(400).json({ error: 'Nenhum argumento enviado para pesquisa.' });
    return;
  }

  const users = await HttpClient(url, {})
    .then((response) => response.data.filter((user) => {
      const searchRegExp = new RegExp(req.body.searchArg, 'i');
      return searchRegExp.test(user.name) || searchRegExp.test(user.username);
    }))
    .then((usersData) => usersData.map((user) => ({
      name: user.name,
      username: user.username,
    })));

  const responseJson = users.length === 0 ? [{ message: 'Nenhum usuário encontrado' }] : users;
  res.status(200).json(responseJson);
}
