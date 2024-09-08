import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api/apiService';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const products = await fetchProducts();
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      } catch (error) {
        setError(error.message);
      }
    };
    getProduct();
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <h1>{product.title}</h1>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Popularity:</strong> {product.popularity}</p>
      <p><strong>Description:</strong> Placeholder description</p>
    </div>
  );
};

export default ProductDetails;
