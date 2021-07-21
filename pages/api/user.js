import { HttpClient } from '../../src/infra/http/HttpClient';

const url = 'https://instalura-api.vercel.app/api/users';

export async function getUserData(id) {
  try {
    const userData = await HttpClient(url, {})
      // eslint-disable-next-line no-underscore-dangle
      .then((response) => response.data.find((user) => user._id === id));
    return {
      username: userData.username,
      name: userData.name,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt,
      avatar: 'https://github.com/felipevash.png', // placeholder
      followers: Math.floor(Math.random() * 1000000), // placeholder value
      following: Math.floor(Math.random() * 1000), // placeholder value
    };
  } catch {
    throw new Error('Não foi possível obter os dados do usuário');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(501).json({ message: 'Utilize o método: POST' });
    return;
  }

  if (!req.body.id) {
    res.status(400).json({ error: 'Nenhum argumento enviado para pesquisa.' });
    return;
  }

  const response = getUserData(req.body.id);

  res.status(200).json(response);
}
