import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({ /* mock response */ });

    // Act
    render(<CoreFunctionalityComponent />);

    // Assert
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays data after successful fetch', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({ /* mock response */ });

    // Act
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Assert
    expect(screen.getByText(/data fetched successfully/i)).toBeInTheDocument();
  });

  test('handles error during data fetch', async () => {
    // Arrange
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    // Act
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Assert
    expect(screen.getByText(/failed to load data/i)).toBeInTheDocument();
  });

  test('user interaction triggers API call', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({ /* mock response */ });
    render(<CoreFunctionalityComponent />);

    // Act
    fireEvent.click(screen.getByText(/trigger fetch/i));

    // Assert
    await waitFor(() => expect(fetchData).toHaveBeenCalled());
  });

  test('component is accessible', () => {
    // Arrange & Act
    render(<CoreFunctioninalityComponent />);
    
    // Assert
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
    expect(screen.getByText(/loading/i)).toBeVisible();
    expect(screen.getByText(/data fetched successfully/i)).not.toBeInTheDocument(); // Initially should not be present
  });

  test('edge case: no data available', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({ /* mock empty response */ });

    // Act
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Assert
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when data is being fetched', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({ /* mock response */ });

    // Act
    render(<CoreFunctionalityComponent />);

    // Assert
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays data after successful fetch', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({ /* mock response */ });

    // Act
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Assert
    expect(screen.getByText(/data fetched successfully/i)).toBeInTheDocument();
  });

  test('handles error during data fetch', async () => {
    // Arrange
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    // Act
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Assert
    expect(screen.getByText(/failed to load data/i)).toBeInTheDocument();
  });

  test('user interaction triggers API call', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({ /* mock response */ });
    render(<CoreFunctionalityComponent />);

    // Act
    fireEvent.click(screen.getByText(/trigger fetch/i));

    // Assert
    await waitFor(() => expect(fetchData).toHaveBeenCalled());
  });

  test('component is accessible', () => {
    // Arrange & Act
    render(<CoreFunctioninalityComponent />);
    
    // Assert
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
    expect(screen.getByText(/loading/i)).toBeVisible();
    expect(screen.getByText(/data fetched successfully/i)).not.toBeInTheDocument(); // Initially should not be present
  });

  test('edge case: no data available', async () => {
    // Arrange
    (fetchData as jest.Mock).mockResolvedValueOnce({ /* mock empty response */ });

    // Act
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    // Assert
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});