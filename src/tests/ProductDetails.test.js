import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { fetchProducts } from '../api/apiService';

jest.mock('../api/apiService');

test('renders product details', async () => {
  const mockProduct = { id: 1, title: 'Product 1', price: 100, popularity: 500 };

  fetchProducts.mockResolvedValue([mockProduct]);

  render(
    <MemoryRouter initialEntries={['/product/1']}>
      <Route path="/product/:id">
        <ProductDetails />
      </Route>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByText(/Popularity:/i)).toBeInTheDocument();
  });
});

test('displays error message when unable to fetch product details', async () => {
  fetchProducts.mockRejectedValue(new Error('Unable to fetch product data'));

  render(
    <MemoryRouter initialEntries={['/product/1']}>
      <Route path="/product/:id">
        <ProductDetails />
      </Route>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText(/Unable to fetch product data/i)).toBeInTheDocument();
  });
});
