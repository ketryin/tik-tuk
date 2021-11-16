import axios from "axios";
import userFeedData from "./user-feed";

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
  }
};

const executeRequest = url => axios.request({ ...options, url }).then(response => response.data);

export const getTrendingFeed = () => executeRequest('https://tiktok33.p.rapidapi.com/trending/feed');
export const getUserInfo = username => executeRequest(`https://tiktok33.p.rapidapi.com/user/info/${username}`);
export const getUserFeed = () => Promise.resolve(userFeedData);