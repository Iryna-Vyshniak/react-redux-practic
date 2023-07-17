export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

export const selectProducts = (state) => state.products.items;

export const selectFavoriteProduct = (state) =>
  state.products.items.selectFavoriteProductfilter(({ favorite }) => favorite);

export const selectFilteredProducts = ({ filter, products }) => {
  if (!filter) {
    return products;
  }
  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );
  return visibleProducts;
};
