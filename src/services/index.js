import { giphy } from "@/utils/api-instance";

export const getRandomGif = async () => {
  const { data } = await giphy.get(`/random?api_key=${process.env.VUE_APP_API_KEY_GIPHY}`);
  return data;
};
