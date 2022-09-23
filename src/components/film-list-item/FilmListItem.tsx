import React, { FC, SyntheticEvent, useContext } from 'react';
import { FilmListContext } from '@components/film-list';
import {
    getFilmDetails_allFilms_films,
    getFilmDetails_allFilms_films_characterConnection_characters,
} from '../../queries/types/getFilmDetails';

/* TYPES */
interface FilmListItemProps {
    film: getFilmDetails_allFilms_films;
    style: string;
}

/* COMPONENT */
export const FilmListItem: FC<FilmListItemProps> = ({ film, style }) => {
    const { director, releaseDate, title, id } = film;
    const { setCharacter, handleOnFilmClick } = useContext(FilmListContext)!;

    const handleOnCharacterClick = (
        e: SyntheticEvent,
        character: getFilmDetails_allFilms_films_characterConnection_characters,
    ): void => {
        setCharacter(character);
        e.stopPropagation();
    };

    const charactersList = film.characterConnection?.characters?.map(
        (character) => {
            const { id, name } = character!;
            return (
                <p
                    className="cursor-pointer hover:bg-blue-100"
                    onClick={(e) => handleOnCharacterClick(e, character!)}
                    key={id}>
                    {name}
                </p>
            );
        },
    );

    return (
        <li key={id} className="p-1 border-gray-500 border-b-2 last:border-b-0">
            <h3
                onClick={() => handleOnFilmClick(id)}
                className="cursor-pointer hover:bg-blue-200">
                {title}
            </h3>
            <div className={style}>
                <p>
                    <span>Director: </span> {director}
                </p>
                <p>Release date: {releaseDate}</p>
                {charactersList}
            </div>
        </li>
    );
};
