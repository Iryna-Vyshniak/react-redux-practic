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
    // console.log('RESPONSE', response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailsPost = async (id) => {
  console.log('servise id', id);
  try {
    const response = await publicInstance.get(`/posts/${id}`);
    // console.log('RESPONSE', response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
