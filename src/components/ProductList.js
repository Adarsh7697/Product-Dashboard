import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/apiService';
import SearchBar from './SearchBar';
import Filters from './Filters';
import SortOptions from './SortOptions';
import Pagination from './Pagination';
import '../styles/ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [popularityRange, setPopularityRange] = useState([0, Infinity]);
  const [sortOrder, setSortOrder] = useState({ key: 'price', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    const getProducts = async () => {
  try {
    const data = await fetchProducts();
    setProducts(data.products || data.items || []); // Adjust this line
    setFilteredProducts(data.products || data.items || []); // Adjust this line
  } catch (error) {
    setError(error.message);
  }
};


    getProducts();
  }, []);

  useEffect(() => {
    let result = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.popularity >= popularityRange[0] && product.popularity <= popularityRange[1]
    );

    result = [...result].sort((a, b) => {
      if (sortOrder.direction === 'asc') {
        return a[sortOrder.key] - b[sortOrder.key];
      }
      return b[sortOrder.key] - a[sortOrder.key];
    });

    setFilteredProducts(result);
  }, [products, searchTerm, priceRange, popularityRange, sortOrder]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-list-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filters setPriceRange={setPriceRange} setPopularityRange={setPopularityRange} />
      <SortOptions setSortOrder={setSortOrder} />
      <table className="product-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map(product => (
            <tr key={product.id}>
              <td><Link to={`/product/${product.id}`}>{product.title}</Link></td>
              <td>${product.price}</td>
              <td>{product.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;



