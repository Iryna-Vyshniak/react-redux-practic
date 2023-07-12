import axios from 'axios';

const instance = axios.create({
  baseURL: `https://simple-products-backend.onrender.com/api`,
});

const setToken = (token) => {
  return (instance.defaults.headers.authorization = `Bearer ${token}`);
};

export const dellToken = () => {
  instance.defaults.headers.authorization = '';
};

//  register
export const signUp = async (body) => {
  // console.log(body);
  const { data: result } = await instance.post('/auth/signup', body);
  console.log('REGISTER RESULT', result);
  return result;
};

// verify
export const verify = async (verificationToken) => {
  const { data: result } = await instance.get(`/auth/verify/${verificationToken}`);
  return result;
};

// login
export const signIn = async (body) => {
  const { data: result } = await instance.post('/auth/signin', body);
  console.log('LOGIN RESULT', result);
  setToken(result.token);
  return result;
};

// logout
export const logOut = async () => {
  const { data } = await instance.post('/auth/logout');
  dellToken();
  return data;
};

// get current
export const getProfile = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (error) {
    dellToken();
    throw error;
  }
};

export default instance;
