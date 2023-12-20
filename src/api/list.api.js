import axios from "axios";

const urlApi = axios.create({ baseURL: 'https://api-places-hvof.onrender.com' })

// lugares
// export const getAllList = () => axios.get("https://api-places-hvof.onrender.comlugares");
export const getAllList = () => urlApi.get("/lugares/")
export const getPlaceById = (id) => urlApi.get(`/lugares/${id}/`)
export const postPlace = (place) => urlApi.post(`/lugares/`, place)
export const deletePlace = (id) => urlApi.delete(`/lugares/${id}/`)
export const upPlace = (id, place) => urlApi.put(`/lugares/${id}/`, place)
export const uplikes = (id, like, state) => urlApi.patch(`/lugares/${id}/`, like, state)


// comments
export const getAllComments = () => urlApi.get("/comments");
export const getComment = (id) => urlApi.get(`/comments/${id}/`)
export const postComment = (comment) => urlApi.post("comments/", comment);
export const deleteComment = (id) => axios.delete(`https://api-places-hvof.onrender.comcomments/${id}`);
export const upComment = (id, textComment) => axios.put(`https://api-places-hvof.onrender.comcomments/${id}`, textComment);

//usuarios
export const postUser = (user) => urlApi.post("/users/", user)
export const getAllUsers = () => urlApi.get("/users/")

