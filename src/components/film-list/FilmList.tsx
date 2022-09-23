import React, { createContext, FC, useContext, useState } from 'react';
import { produce } from 'immer';

import { getFilmDetails_allFilms_films_characterConnection_characters } from '../../queries/types/getFilmDetails';
import { FilmListItem } from '@components/film-list-item';
import { Modal } from '@components/modal';
import { HomeContext } from '../../../pages';

/* TYPES */
interface ExpandedFilms {
    [id: string]: boolean;
}

interface FilmListContext {
    setCharacter: (
        character: getFilmDetails_allFilms_films_characterConnection_characters,
    ) => void;
    handleOnFilmClick: (id: string) => void;
}

/* CONTEXT */
export const FilmListContext = createContext<FilmListContext | undefined>(
    undefined,
);

/* CONSTANTS */
const getAccordionStyle = (id: string, expandedFilms: ExpandedFilms): string =>
    expandedFilms[id] ? 'block' : 'hidden';

/* COMPONENT */
export const FilmList: FC = () => {
    const { films } = useContext(HomeContext)!;
    const [expandedFilms, setExpandedFilms] = useState<ExpandedFilms>({});
    const [selectedCharacter, setSelectedCharacter] = useState<
        getFilmDetails_allFilms_films_characterConnection_characters
    >();

    const handleOnFilmClick = (id: string): void => {
        if (expandedFilms[id]) {
            setExpandedFilms(
                produce((prevState) => {
                    delete prevState[id];
                }),
            );
        } else {
            setExpandedFilms((prevState) => ({
                ...prevState,
                [id]: true,
            }));
        }
    };

    const handleSetCharacter = (
        character: getFilmDetails_allFilms_films_characterConnection_characters,
    ): void => {
        setSelectedCharacter(character);
    };

    const handleOnClose = (): void => {
        setSelectedCharacter(undefined);
    };

    const listFilmItems = films.map((film) => {
        const { id } = film;

        return (
            <FilmListItem
                key={id}
                film={film}
                style={getAccordionStyle(id, expandedFilms)}
            />
        );
    });

    const renderFilms = films.length ? (
        <ul
            data-testid="films-list"
            className="w-1/2 border-4 border-indigo-500 rounded-sm">
            <FilmListContext.Provider
                value={{
                    setCharacter: handleSetCharacter,
                    handleOnFilmClick: handleOnFilmClick,
                }}>
                {listFilmItems}
            </FilmListContext.Provider>
        </ul>
    ) : (
        <p>None of the films match :)</p>
    );

    return (
        <>
            <Modal
                title={selectedCharacter?.name}
                onClose={handleOnClose}
                open={!!selectedCharacter}>
                <ul>
                    <li>Name: {selectedCharacter?.name}</li>
                    <li>Birth year: {selectedCharacter?.birthYear}</li>
                    <li>Eye color: {selectedCharacter?.eyeColor}</li>
                    <li>Gender: {selectedCharacter?.gender}</li>
                    <li>Height: {selectedCharacter?.height}</li>
                    <li>Mass: {selectedCharacter?.mass}</li>
                    <li>Skin color: {selectedCharacter?.skinColor}</li>
                    <li>Home world: {selectedCharacter?.homeworld?.name}</li>
                </ul>
            </Modal>
            {renderFilms}
        </>
    );
};
