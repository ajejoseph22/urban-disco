import React, { createContext } from 'react';
import { NextPage } from 'next';
import { MovieApp } from '@components/movie-app';
import { ApolloProvider, client } from '@packages/apollo';
import { useRouter } from 'next/router';
import { GET_FILMS } from '../src/queries/queries';
import { getFilmDetails_allFilms_films } from '../src/queries/types/getFilmDetails';

/* TYPES */
interface HomeContext {
    films: getFilmDetails_allFilms_films[];
}

interface HomeProps {
    films: getFilmDetails_allFilms_films[];
}

/* CONTEXT */
export const HomeContext = createContext<HomeContext | undefined>(undefined);

/* COMPONENT */
const Home: NextPage<HomeProps> = ({ films }) => {
    const router = useRouter();
    const { query } = router.query;

    return (
        <ApolloProvider>
            <HomeContext.Provider value={{ films }}>
                <main className="mt-8 flex flex-col justify-center items-center">
                    <MovieApp query={query as string} />
                </main>
            </HomeContext.Provider>
        </ApolloProvider>
    );
};

Home.getInitialProps = async ({ query: queryObj }) => {
    const { data } = await client.query({
        query: GET_FILMS,
    });
    const { query } = queryObj;
    const films = data.allFilms.films;
    const filteredData = query
        ? films.filter((film: getFilmDetails_allFilms_films) =>
              film.title
                  ?.toLowerCase()
                  .includes((query as string).toLowerCase()),
          )
        : films;

    return {
        films: filteredData,
    };
};

export default Home;
