import axios from 'axios';

export const fetchData = () =>
  axios.get(
    `https://content.googleapis.com/youtube/v3/search?part=snippet&q=letmeloveyou&type=video&key=${
      process.env.REACT_APP_KEY_YOUTUBE
    }`
  );
export const findSong = q =>
  axios.get(
    `https://content.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&key=${
      process.env.REACT_APP_KEY_YOUTUBE
    }`
  );
