import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from '@components/modal';

describe('Modal', () => {
    it('should render the children passed to it', () => {
        // Arrange
        const dummyText = 'some item';

        // Act
        render(
            <Modal onClose={() => {}} open={true}>
                <p id="dummy-item">{dummyText}</p>
            </Modal>,
        );

        // Assert
        const itemElement = screen.getByText(dummyText);
        expect(itemElement).toBeDefined();
    });

    it('should not render anything when the "open" prop is falsy', () => {
        // Arrange
        const dummyText = 'some item';

        // Act
        render(
            <Modal onClose={() => {}} open={false}>
                <p id="dummy-item">{dummyText}</p>
            </Modal>,
        );

        // Assert
        const itemElement = screen.queryByText(dummyText);
        expect(itemElement).toBeNull();
    });

    it('should call the "onClose" method when the "x" button is clicked', () => {
        // Arrange
        const onClose = jest.fn();
        const dummyText = 'some item';

        // Act
        render(
            <Modal onClose={onClose} open={true}>
                <p id="dummy-item">{dummyText}</p>
            </Modal>,
        );
        screen.getByTestId('close-modal-btn').click();

        // Assert
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
