import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { FilmList } from '@components/film-list';
import { Search } from '@components/search';
import { useRouter } from 'next/router';

/* TYPES */
interface MovieAppProps {
    query?: string;
}

/* COMPONENT */
export const MovieApp: FC<MovieAppProps> = ({ query }) => {
    const [searchValue, setSearchValue] = useState<string>(query || '');
    const router = useRouter();

    useEffect(() => {
        (async () => {
            await router?.push(`?query=${searchValue}`);
        })();
    }, [searchValue]);

    const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <Search value={searchValue} onChange={handleOnSearchChange} />
            <FilmList />
        </>
    );
};
