import axios from "axios";

export const api = axios.create({
  baseURL: `http://apiurl.com/`
});

const onError = ({ message, stack }) => {
  console.error({ message, stack });
  return { data: false };
};

api.interceptors.response.use(({ data }) => data, onError);
export default api;