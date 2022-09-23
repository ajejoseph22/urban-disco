import { gql } from '@apollo/client';
import getFilmDetailsQuery from './get-film-details.graphql';

export const GET_FILMS = gql`
    ${getFilmDetailsQuery}
`;
