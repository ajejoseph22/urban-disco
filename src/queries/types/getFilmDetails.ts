/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFilmDetails
// ====================================================

export interface getFilmDetails_allFilms_films_characterConnection_characters_homeworld {
  /**
   * The name of this planet.
   */
  name: string | null;
}

export interface getFilmDetails_allFilms_films_characterConnection_characters {
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this person.
   */
  name: string | null;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear: string | null;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor: string | null;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender: string | null;
  /**
   * The height of the person in centimeters.
   */
  height: number | null;
  /**
   * The skin color of this person.
   */
  skinColor: string | null;
  /**
   * The mass of the person in kilograms.
   */
  mass: number | null;
  /**
   * A planet that this person was born on or inhabits.
   */
  homeworld: getFilmDetails_allFilms_films_characterConnection_characters_homeworld | null;
}

export interface getFilmDetails_allFilms_films_characterConnection {
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters: (getFilmDetails_allFilms_films_characterConnection_characters | null)[] | null;
}

export interface getFilmDetails_allFilms_films {
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The title of this film.
   */
  title: string | null;
  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  releaseDate: string | null;
  /**
   * The episode number of this film.
   */
  episodeID: number | null;
  /**
   * The name of the director of this film.
   */
  director: string | null;
  /**
   * The name(s) of the producer(s) of this film.
   */
  producers: (string | null)[] | null;
  characterConnection: getFilmDetails_allFilms_films_characterConnection | null;
}

export interface getFilmDetails_allFilms {
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (getFilmDetails_allFilms_films | null)[] | null;
}

export interface getFilmDetails {
  allFilms: getFilmDetails_allFilms | null;
}
