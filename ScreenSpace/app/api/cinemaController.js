import {cinemas} from '../ui/mock/mockValues';

// CINEMA CRUD
export const createCinema = newCinema => cinemas.push(newCinema);

export const getCinemaByName = cinemaName =>
  // FIXME: Call backend API using axios
  getCinemas().filter(cinema =>
    cinema.name.toLowerCase().includes(cinemaName.toLowerCase()),
  );

export const getCinemas = (movieId, ownerId) => {
  // FIXME: Call backend API using axios
  if (ownerId) {
    return cinemas.filter(cinema => cinema.userId === ownerId);
  } else {
    return cinemas;
  }
};

export const getCinemaById = cinemaId =>
  // FIXME: Call backend API using axios
  getCinemas().find(cinema => cinema.id === cinemaId);

export const updateCinema = newCinema => {
  // FIXME: Call backend API using axios
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
  // FIXME: Call backend API using axios
  console.log(
    'Deleted cinema: ',
    cinemas.splice(cinemas.indexOf(getCinemaById(cinemaId)), 1),
  );
};

export const createHall = (cinemaId, payload) => {
  // TODO: Implement createHall
};
export const getHalls = cinemaId => {
  // FIXME: Call backend API using axios
  return getCinemaById(cinemaId).halls;
};
export const getHallById = (cinemaId, hallId) => {
  // TODO: Implement getHallById
};
export const getHallByName = (cinemaId, hallName) => {
  // TODO: Implement getHallById
  getHalls(cinemaId).filter(hall => hall.name.toLowerCase().includes(hallName.toLowerCase()))
};
export const updateHall = (cinemaId, hallId, payload) => {
  // TODO: Implement updateHall
};
export const deleteHall = (cinemaId, hallId) => {
  // TODO: Implement deleteHall
};

export const createShow = (cinemaId, hallId, payload) => {
  // TODO: Implement createShow
};
export const getShows = cinemaId => {
  // FIXME: Call backend API using axios
  return getCinemaById(cinemaId).halls.flatMap(o =>
    o.cinemaShows.map(e => ({
      id: o.id,
      name: o.name,
      width: o.width,
      height: o.height,
      available: o.available,
      cinemaShow: e,
    })),
  );
};
export const getShowById = (cinemaId, showId) => {
  // TODO: Call backend API using axios
};
export const updateShow = (cinemaId, showId, payload) => {
  // TODO: Call backend API using axios
};
export const deleteShow = showId => {
  // TODO: Add logic to delete show
  console.log('Deleted show with id: ', showId);
};
