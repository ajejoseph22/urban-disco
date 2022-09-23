import { ChangeEvent, FC } from 'react';

/* TYPES */
interface SearchProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

/* COMPONENT */
export const Search: FC<SearchProps> = ({ onChange, value }) => {
    return (
        <input
            data-testid="search-bar"
            className="w-1/3 pl-1 border-indigo-500 border-solid border-2 outline-none mb-8"
            placeholder="Enter the title of a film"
            onChange={onChange}
            value={value}
        />
    );
};
