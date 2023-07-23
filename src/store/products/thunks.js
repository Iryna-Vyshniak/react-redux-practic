import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../share/api/products-service';
// import { getAllProducts } from '../../share/api/products-service';
// import { createProduct } from '../../share/api/products-service';
// import { getProductById } from '../../share/api/products-service';

export const getAllProductsThunk = createAsyncThunk(
  'products/getAll',
  async (page, { rejectWithValue }) => {
    console.log(page);
    try {
      const data = await api.getAllProducts(page);
      // console.log('thunk all products', data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  'products/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.createProduct(data);
      // console.log('DATA thunk result', result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const getProductByIdThunk = createAsyncThunk(
  'products/id',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.getProductById(id);
      // console.log('ID', result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
