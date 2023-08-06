/* 
#public 

router.get('/', ctrl.getAll);
router.get('/tags', ctrl.getAllTags);
router.get('/tags/:tag', ctrl.getPostsByTag);
router.get('/search', ctrl.getSearchPosts);
router.get('/:id', isValidId, ctrl.getOne);

# private

router.get('/user/posts', checkAuth, ctrl.getUserPosts);
router.post('/', checkAuth, uploadCloud.single('image'), postCreateValidation, ctrl.createPost);
router.patch('/:id', checkAuth, isValidId, uploadCloud.single('image'), ctrl.updatePost);
router.delete('/:id', checkAuth, isValidId, ctrl.deletePost);
 */
import axios from 'axios';

import instance from './auth-service';

const API = import.meta.env.VITE_API_KEY;

const publicInstance = axios.create({
  baseURL: `${API}/api`,
});

export const getPosts = async (page) => {
  try {
    const response = await publicInstance.get('/posts', {
      params: {
        page,
        limit: 6,
      },
    });
    //  console.log('RESPONSE', response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getAllTags = async () => {
  try {
    const response = await publicInstance.get('/posts/tags');
    //  console.log('RESPONSE', response);
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getPostsByTags = async (tag, page) => {
  try {
    const response = await publicInstance.get(`/posts/tags/${tag}`, {
      params: {
        page,
        limit: 6,
      },
    });
    //  console.log('RESPONSE', response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getDetailsPost = async (id) => {
  //  console.log('servise id', id);
  try {
    const response = await publicInstance.get(`/posts/${id}`);
    //  console.log('RESPONSE', response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getPostByQuery = async (query) => {
  try {
    const response = await publicInstance.get(`/posts/search`, {
      params: {
        name: query,
        limit: 6,
      },
    });
    //  console.log('RESPONSE', response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getUsersPosts = async (name) => {
  try {
    const response = await instance.get(`/posts/users/${name}`);
    // console.log('RESPONSE', response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getFavoritesPosts = async (id) => {
  try {
    const response = await instance.get(`/posts/${id}/favorites`);
    // console.log('RESPONSE all favorites', response);
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const setFavoritePost = async (id) => {
  try {
    const response = await instance.post(`/posts/${id}/favorite`);
    // console.log('RESPONSE set fav', response.data);
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getComments = async (id) => {
  try {
    const response = await instance.get(`/posts/${id}/comments`);
    //console.log('RESPONSE get all comments', response);
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const createComment = async (id, { value }) => {
  try {
    const response = await instance.post(`/posts/${id}/comments`, { value });
    //console.log('RESPONSE add comment', response);
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
};
