import {cinemas} from '../ui/mock/mockValues';

// CINEMA CRUD
export const createCinema = newCinema => cinemas.push(newCinema);

export const getCinemaByName = cinemaName =>
  getCinemas().filter(cinema =>
    cinema.name.toLowerCase().includes(cinemaName.toLowerCase()),
  );

export const getCinemas = (movieId, ownerId) => {
  cinemas.filter(cinema => cinema.userId === ownerId);
};

export const getCinemaById = cinemaId =>
  getCinemas().find(cinema => cinema.id === cinemaId);

export const updateCinema = newCinema => {
  cinemaToUpdate = getCinemaById(newCinema.id);
  if (cinemaToUpdate === undefined) {
    createCinema(newCinema);
    console.log('Created cinema: ', newCinema);
  } else {
    console.log(
      'Updated cinema: ',
      cinemas.splice(cinemas.indexOf(cinemaToUpdate), 1, newCinema),
    );
  }
};

export const deleteCinema = cinemaId => {
  console.log(
    'Deleted cinema: ',
    cinemas.splice(cinemas.indexOf(getCinemaById(cinemaId)), 1),
  );
};

export const createHall = (cinemaId, payload) => {};
export const getHalls = cinemaId => {};
export const getHallById = (cinemaId, hallId) => {};
export const updateHall = (cinemaId, hallId, payload) => {};
export const deleteHall = (cinemaId, hallId) => {};

export const createShow = (cinemaId, hallId, payload) => {};
export const getShows = cinemaId => {};
export const getShowById = (cinemaId, showId) => {};
export const updateShow = (cinemaId, showId, payload) => {};
export const deleteShow = (cinemaId, showId) => {};

