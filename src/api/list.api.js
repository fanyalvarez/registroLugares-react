import axios from "axios";

const urlApi = axios.create({ baseURL: 'http://localhost:3030/' })

// lugares
// export const getAllList = () => axios.get("http://localhost:3030/lugares");
export const getAllList = () => urlApi.get("/lugares/")
export const getPlaceById = (id) => urlApi.get(`/lugares/${id}/`)
export const postPlace = (place) => urlApi.post(`/lugares/`, place)
export const deletePlace = (id) => urlApi.delete(`/lugares/${id}/`)
export const upPlace = (id, place) => urlApi.put(`/lugares/${id}/`, place)


export const uplikes = (id, like) => urlApi.patch(`/lugares/${id}/`, like)


// comments
export const getAllComments = () => urlApi.get("/comments");
export const getComment = (id) => urlApi.get(`/comments/${id}/`)
export const postComment = (comment) => urlApi.post("comments/", comment);
// export const deleteComment = (id) => urlApi.delete("comments/", id);
export const deleteComment = (id) => axios.delete(`http://localhost:3030/comments/${id}`);
export const upComment = (id, textComment) => axios.put(`http://localhost:3030/comments/${id}`, textComment);

//usuarios
export const postUser = (user) => urlApi.post("/users/", user)
export const getAllUsers = () => urlApi.get("/users/")

