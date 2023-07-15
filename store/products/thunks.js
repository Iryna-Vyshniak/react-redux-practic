import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../../share/api/products-service';
import { createProduct } from '../../share/api/products-service';
import { getProductById } from '../../share/api/products-service';

export const getAllProductsThunk = createAsyncThunk(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getAllProducts();
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  'products/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await createProduct(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const getProductByIdThunk = createAsyncThunk(
  'products/id',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getProductById(id);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
