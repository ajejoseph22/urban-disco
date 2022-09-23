import React, { FC } from 'react';

interface ModalProps {
    title?: string | null;
    onClose: () => void;
    open: boolean;
}

export const Modal: FC<ModalProps> = ({ children, title, onClose, open }) => {
    const handleOnClose = () => onClose();

    if (!open) return null;

    return (
        <div
            onClick={handleOnClose}
            className="fixed h-full w-full top-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-50 cursor-pointer">
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white shadow w-1/3 cursor-default">
                <header className="p-2 flex justify-end border-b">
                    {title && <h2 className="w-full">{title}</h2>}
                    <button
                        data-testid="close-modal-btn"
                        className="focus:outline-none"
                        onClick={handleOnClose}>
                        ✖️
                    </button>
                </header>
                <div className="p-2">{children}</div>
            </div>
        </div>
    );
};
