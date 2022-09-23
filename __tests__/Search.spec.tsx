import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from '@components/search';

describe('Search', () => {
    it('should call the "onChange" method when the input value changes', () => {
        // Arrange
        const onChange = jest.fn();

        // Act
        render(<Search onChange={onChange} />);
        const searchBarElement = screen.getByTestId('search-bar');
        fireEvent.change(searchBarElement, {
            target: { value: 'a' },
        });

        // Assert
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
