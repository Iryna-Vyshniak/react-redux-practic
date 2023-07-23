export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

export const selectProducts = (state) => state.products.items;
export const selectProductDetails = (state) => state.products.productDetails;
export const selectCurrentPage = (state) => state.products.currentPage;
export const selectTotalPages = (state) => state.products.totalPages;

export const selectFavoriteProduct = (state) => {
  return state.items.filter(({ favorite }) => favorite);
};

export const selectFilteredProducts = ({ filter, products }) => {
  if (!filter) {
    return products;
  }
  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );
  return visibleProducts;
};
