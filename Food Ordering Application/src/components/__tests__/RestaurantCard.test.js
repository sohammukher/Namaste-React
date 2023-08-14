import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from './mockData/resCardMock.json';
import '@testing-library/jest-dom/extend-expect';

it('Should render RestaurantCard component with props data', () => {
  render(<RestaurantCard resdata={MOCK_DATA} />);

  const nameOfRestaurantName = screen.getByText(/Radhey/);

  expect(nameOfRestaurantName).toBeInTheDocument();
});
