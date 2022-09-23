import React from 'react';
import { render, screen } from '@testing-library/react';
import { MovieApp } from '@components/movie-app';
import { HomeContext } from '../pages';
import { getFilmDetails_allFilms_films } from '../src/queries/types/getFilmDetails';
import { useRouter } from 'next/router';

describe('MovieApp', () => {
    it('should render the search bar and the list of films', () => {
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
                <MovieApp />
            </HomeContext.Provider>,
        );

        // Assert
        expect(screen.getByTestId('search-bar')).toBeDefined();
        expect(screen.getByTestId('films-list')).toBeDefined();
    });
});
