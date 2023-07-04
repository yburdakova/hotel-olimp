// pages/api/instagram.js
import axios from 'axios';



const CLIENT_ID = process.env.INSTAGRAM_ID_CLIENT;
const CLIENT_SECRET = process.env.INSTAGRAM_SECRET_KEY;
const REDIRECT_URI = process.env.REDIRECT_INSTAGRAM_URI;

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Authorization code missing' });
  }

  try {
    const response = await axios.post('https://api.instagram.com/oauth/access_token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
      code: code,
    });

    const accessToken = response.data.access_token;
    // Сохраните accessToken в базе данных или в сессии, чтобы использовать его в будущем

    return res.status(200).json({ access_token: accessToken });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to get access token from Instagram' });
  }
}
