import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../api/apiService';

jest.mock('../api/apiService');

test('renders product list', async () => {
  const mockProducts = [
    { id: 1, title: 'Product 1', price: 100, popularity: 500 },
    { id: 2, title: 'Product 2', price: 200, popularity: 1000 },
  ];

  fetchProducts.mockResolvedValue(mockProducts);

  render(<ProductList />);

  await waitFor(() => {
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });
});

test('displays error message when unable to fetch products', async () => {
  fetchProducts.mockRejectedValue(new Error('Unable to fetch product data'));

  render(<ProductList />);

  await waitFor(() => {
    expect(screen.getByText(/Unable to fetch product data/i)).toBeInTheDocument();
  });
});
