import { giphy } from "@/utils/giphy-instance";
import api from "../utils/api-instance";

export const getGifs = async (query, page) => {
  const { data } = await giphy.get(`/search?api_key=RdlbVVe7uKnSxCMUvHQjTlqeSJNw7khH&q=${query}&limit=12&offset=${page}&lang=pt`);
  return data;
};


//Simulating communication with API

//Saving new GIF
export const saveGif = async (gif) => {
  /*
  gif = {
    title: String,
    id: String,
    username: String,
    url: String,
    avatarUser: String,
  },
  */
  const { data } = await api.post(`/`, gif)
  return data
}

//Update GIF
export const updateGif = async (id, updates) => {
  /*
  updates = {
    title: String,
    username: String,
    url: String,
    avatarUser: String,
  },
  */
  const { data } = await api.put(`/${id}`, updates)
  return data
}

//Delete GIF
export const deleteGif = async (id) => {
  /*
  gif = {
    title: String,
    id: String,
    username: String,
    url: String,
    avatarUser: String,
  },
  */
  const { data } = await api.delete(`/${id}`)
  return data
}