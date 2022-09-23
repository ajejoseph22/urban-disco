import React from 'react';
import { FilmList } from '@components/film-list/FilmList';
import { render, screen } from '@testing-library/react';
import { HomeContext } from '../pages';
import { getFilmDetails_allFilms_films } from '../src/queries/types/getFilmDetails';

describe('FilmList', () => {
    it('should render a list of films passed to it', () => {
        // Arrange
        const films: getFilmDetails_allFilms_films[] = [
            {
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
            },
        ];

        // Act
        render(
            <HomeContext.Provider value={{ films }}>
                <FilmList />
            </HomeContext.Provider>,
        );

        // Assert
        for (const film of films) {
            expect(screen.getByText(film.title!)).toBeDefined();
        }
    });

    it('should render "None of the films match :)" when an empty array of films is passed', () => {
        // Arrange
        const films: getFilmDetails_allFilms_films[] = [];

        // Act
        render(
            <HomeContext.Provider value={{ films }}>
                <FilmList />
            </HomeContext.Provider>,
        );

        // Assert
        const expectedText = 'None of the films match :)';
        expect(screen.getByText(expectedText)).toBeDefined();
    });
});
