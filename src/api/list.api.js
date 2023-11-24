import axios from "axios";


const urlApi = axios.create({ baseURL: 'http://localhost:3030/' })



// lugares
// export const getAllList = () => axios.get("http://localhost:3030/lugares");
export const getAllList = () => urlApi.get("/lugares/")
export const getPlace = (id) => urlApi.get(`/lugares/${id}/`)

// likes
// export const upLikes = (id) => urlApi.put(`/lugares/${id}/`)
export const upLikes = () => urlApi.put(`/lugares/1`)
export const getLikes = () => urlApi.get(`/lugares/1`)



// comments
export const getAllComments = () => urlApi.get("/comments");
export const getComment = (id) => urlApi.get(`/comments/${id}/`)
export const postComment = (comment) => urlApi.post("comments/", comment);
// export const deleteComment = (id) => urlApi.delete("comments/", id);
export const deleteComment = (id) => axios.delete(`http://localhost:3030/comments/${id}`);
export const upComment = (id, textComment) => axios.put(`http://localhost:3030/comments/${id}`, textComment);


