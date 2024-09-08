export const sortProducts = (products, key, direction) => {
    return products.sort((a, b) => {
      if (direction === 'asc') {
        return a[key] - b[key];
      }
      return b[key] - a[key];
    });
  };
  
  export const filterProducts = (products, searchTerm, priceRange, popularityRange) => {
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.popularity >= popularityRange[0] && product.popularity <= popularityRange[1]
    );
  };
  