import instance from './auth-service';

export const getAllProducts = async () => {
  try {
    const response = await instance.get('/products');
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (data) => {
  console.log('API ADD', data);
  return instance.post('/products', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
// export const createProduct = async (data) => {
//   console.log('API ADD', data);
//   try {
//     const response = await instance.post('/products', data, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log(response);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getProductById = async (id) => {
  //  console.log(typeof id, 'ID', id);
  try {
    const { data } = await instance.get(`/products/${id}`);
    // console.log('details api', data);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Обробка помилки 404 (продукт не знайдено)
      console.log('Product not found');
    } else {
      // Інші помилки
      console.log('Error fetching product:', error.message);
    }
  }
};

export default instance;

// const products = [
//   {
//     id: 1,
//     name: 'Brown eggs',
//     type: 'dairy',
//     description: 'Raw organic brown eggs in a basket',
//     url: 'https://atlas-content-cdn.pixelsquid.com/stock-images/bowl-of-brown-eggs-egg-KaB5Wz6-600.jpg',
//     price: 28.1,
//   },
//   {
//     id: 2,
//     name: 'Sweet fresh stawberry',
//     type: 'fruit',
//     description: 'Sweet fresh stawberry on the wooden table',
//     url: 'https://pngimg.com/uploads/strawberry/strawberry_PNG2598.png',
//     price: 29.45,
//   },
//   {
//     id: 3,
//     name: 'Asparagus',
//     type: 'vegetable',
//     description: 'Asparagus with ham on the wooden table',
//     url: 'https://pngimg.com/uploads/asparagus/asparagus_PNG12.png',
//     price: 18.95,
//   },
//   {
//     id: 4,
//     name: 'Green smoothie',
//     type: 'dairy',
//     description:
//       "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
//     url: 'https://img.freepik.com/free-photo/green-detox-smoothie-smoothie-recipes-fast-weight-loss_144627-30065.jpg?w=1060&t=st=1689009883~exp=1689010483~hmac=9459d57483ac06a09ef864fc96094c01c6a54f3ab776418292890fb24ed8647d',
//     price: 17.68,
//   },
//   {
//     id: 5,
//     name: 'Raw legums',
//     type: 'vegetable',
//     description: 'Raw legums on the wooden table',
//     url: 'https://www.rosannadavisonnutrition.com/wp-content/uploads/2015/04/legumes.jpg',
//     price: 17.11,
//   },
//   {
//     id: 6,
//     name: 'Baking cake',
//     type: 'dairy',
//     description:
//       'Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.',
//     url: 'https://www.nicepng.com/png/detail/32-322780_carrot-cake-png-cake.png',
//     price: 11.14,
//   },
//   {
//     id: 7,
//     name: 'Pesto with basil',
//     type: 'vegetable',
//     description: 'Italian traditional pesto with basil, chesse and oil',
//     url: 'https://www.innit.com/meal-service/en-GB/images/Meal-Meal-Pasta%3A%20No-Protein%2BRoasted-Broccoli%2BBlended-Pesto_Sauce%2BBoiled-Spaghetti_960x960.png',
//     price: 18.19,
//   },
//   {
//     id: 8,
//     name: 'Hazelnut in black ceramic bowl',
//     type: 'vegetable',
//     description:
//       'Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus',
//     url: 'https://img.freepik.com/premium-photo/mixed-nuts-white-wooden-bowl-white-background-macadamia-almonds-hazelnuts-cashew_615349-261.jpg',
//     price: 27.35,
//   },
//   {
//     id: 9,
//     name: 'Fresh stawberry',
//     type: 'fruit',
//     description: 'Sweet fresh stawberry on the wooden table',
//     url: 'https://purepng.com/public/uploads/large/bowl-full-of-strawberries-04s.png',
//     price: 28.59,
//   },
//   {
//     id: 10,
//     name: 'Lemon and salt',
//     type: 'fruit',
//     description: 'Rosemary, lemon and salt on the table',
//     url: 'https://pngimg.com/uploads/lemon/lemon_PNG25196.png',
//     price: 15.79,
//   },
// ];

// export const getProducts = () => {
//   return products;
// };

// export const getProductById = (productId) => {
//   const id = parseInt(productId, 10);
//   return products.find((product) => product.id === id);
// };
