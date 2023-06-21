import {cinemas} from '../ui/mock/mockValues';

export const getCinemaByName = cinemaName =>
  getCinemas().filter(cinema =>
    cinema.name.toLowerCase().includes(cinemaName.toLowerCase()),
  );

export const getCinemas = () => cinemas;

