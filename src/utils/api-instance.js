import axios from "axios";

export const giphy = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs`
});

const onError = ({ message, stack }) => {
  console.error({ message, stack });
  return { data: false };
};

giphy.interceptors.response.use(({ data }) => data, onError);
export default giphy;