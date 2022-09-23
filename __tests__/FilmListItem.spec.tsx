import React from 'react';
import { FilmListItem } from '@components/film-list-item/FilmListItem';
import { render, screen } from '@testing-library/react';
import { getFilmDetails_allFilms_films } from '../src/queries/types/getFilmDetails';
import { FilmListContext } from '@components/film-list';

let film: getFilmDetails_allFilms_films;
beforeAll(() => {
    film = {
        id: 'some id',
        title: 'some film',
        releaseDate: 'some date',
        episodeID: 25,
        director: 'some director',
        producers: ['some producer'],
        characterConnection: {
            characters: [
                {
                    id: 'some id',
                    name: 'anakin skywalker',
                    birthYear: '2000',
                    skinColor: 'some skin color',
                    eyeColor: 'some eye color',
                    gender: null,
                    height: null,
                    mass: null,
                    homeworld: null,
                },
            ],
        },
    };
});

describe('FilmListItem', () => {
    it('should render a single film item', () => {
        // Arrange
        const style = 'block';

        // Act
        render(
            <FilmListContext.Provider
                value={{
                    setCharacter: () => {},
                    handleOnFilmClick: () => {},
                }}>
                <FilmListItem style={style} film={film} />
            </FilmListContext.Provider>,
        );

        // Assert
        const titleElement = screen.getByText(film.title!);
        const directorElement = screen.getByText(film.director!);
        const releaseDateElement = screen.getByText((text) =>
            text.includes(film.releaseDate!),
        );
        const characterElement = screen.getByText(
            film.characterConnection!.characters![0]!.name!,
        );

        expect(titleElement).toBeDefined();
        expect(directorElement).toBeDefined();
        expect(releaseDateElement).toBeDefined();
        expect(characterElement).toBeDefined();
    });

    it('should call "handleOnFilmClick" method when a film title is clicked', () => {
        // Arrange
        const style = 'block';
        const handleOnFilmClick = jest.fn();

        // Act
        render(
            <FilmListContext.Provider
                value={{
                    handleOnFilmClick,
                    setCharacter: () => {},
                }}>
                <FilmListItem style={style} film={film} />
            </FilmListContext.Provider>,
        );
        screen.getByText(film.title!).click();

        // Assert
        expect(handleOnFilmClick).toHaveBeenCalledTimes(1);
    });

    it('should call "setCharacter" method when a character is clicked', () => {
        // Arrange
        const style = 'block';
        const setCharacter = jest.fn();

        // Act
        render(
            <FilmListContext.Provider
                value={{
                    setCharacter,
                    handleOnFilmClick: () => {},
                }}>
                <FilmListItem style={style} film={film} />
            </FilmListContext.Provider>,
        );
        screen
            .getByText(film.characterConnection?.characters![0]!.name!)
            .click();

        // Assert
        expect(setCharacter).toHaveBeenCalledTimes(1);
    });
});
