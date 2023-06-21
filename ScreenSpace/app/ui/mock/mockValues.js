export const editValues = {
  cinemaName: 'Hoyts Palermo',
  companyName: 'Hoyts',
  pricePerShow: '33',
  active: true,
  address: 'Berutti 1319',
  postalCode: 'C1903BB1',
  city: 'CABA',
  province: 'Jujuy',
  country: 'Argentina',
};

export const cinemas = [
  {
    id: 0,
    ownerId: 0,
    name: 'Hoyts Abasto',
    company: 'Hoyts',
    calle: 'Calle Falsa',
    numero: '123',
    localidad: 'CABA',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    longitude: 0.02,
    latitude: 0.01,
    seatCosts: 2000,
    available: true,
    halls: [
      {
        id: 0,
        name: 'Main Hall',
        width: 20,
        height: 10,
        available: true,
        cinemaShows: [
          {
            id: 0,
            movieId: 0,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Everything Everywhere All at Once',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 1,
            movieId: 1,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Star Wars: Episode IX',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 2,
            movieId: 2,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Puss in Boots 2',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 3,
            movieId: 3,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Shrek 2',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 4,
            movieId: 4,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Fast X',
            availableSeats: ['A1,A2,B2,C3'],
          },
        ],
      },
      {
        id: 1,
        name: 'Hall 1',
        width: 12,
        height: 8,
        available: true,
        cinemaShows: [
          {
            id: 1,
            movieId: 1,
            datetime: '2023-06-23T02:05:59.422Z',
            name: 'Star Wars: Episode IX',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 2,
            movieId: 2,
            datetime: '2023-06-16T02:05:59.422Z',
            name: 'Puss in Boots 2',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 4,
            movieId: 4,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Fast X',
            availableSeats: ['A1,A2,B2,C3'],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    ownerId: 0,
    name: 'Hoyts Unicenter',
    company: 'Hoyts',
    calle: 'Calle Falsa',
    numero: '123',
    localidad: 'San Isidro',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    longitude: 0.02,
    latitude: 0.01,
    seatCosts: 2000,
    available: true,
    halls: [
      {
        id: 0,
        name: 'Main Hall',
        width: 0,
        height: 0,
        available: true,
        cinemaShows: [
          {
            id: 0,
            movieId: 0,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Everything Everywhere All at Once',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 1,
            movieId: 1,
            datetime: '2023-06-15T02:05:59.422Z',
            name: 'Star Wars: Episode IX',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 2,
            movieId: 2,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Puss in Boots 2',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 3,
            movieId: 3,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'string',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 4,
            movieId: 4,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'string',
            availableSeats: ['A1,A2,B2,C3'],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    ownerId: 0,
    name: 'Hoyts Alto Palermo',
    company: 'Hoyts',
    calle: 'Calle Falsa',
    numero: '123',
    localidad: 'CABA',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    longitude: 0.02,
    latitude: 0.01,
    seatCosts: 2000,
    available: false,
    halls: [
      {
        id: 0,
        name: 'Main Hall',
        width: 0,
        height: 0,
        available: true,
        cinemaShows: [
          {
            id: 0,
            movieId: 0,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Everything Everywhere All at Once',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 1,
            movieId: 1,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Star Wars: Episode IX',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 2,
            movieId: 2,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Puss in Boots 2',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 3,
            movieId: 3,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'string',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 4,
            movieId: 4,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'string',
            availableSeats: ['A1,A2,B2,C3'],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    ownerId: 0,
    name: 'Village Recoleta',
    company: 'Village',
    calle: 'Calle Falsa',
    numero: '123',
    localidad: 'CABA',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    longitude: 0.02,
    latitude: 0.01,
    seatCosts: 2000,
    available: true,
    halls: [
      {
        id: 0,
        name: 'Main Hall',
        width: 0,
        height: 0,
        available: true,
        cinemaShows: [
          {
            id: 0,
            movieId: 0,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Everything Everywhere All at Once',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 1,
            movieId: 1,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Star Wars: Episode IX',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 2,
            movieId: 2,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'Puss in Boots 2',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 3,
            movieId: 3,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'string',
            availableSeats: ['A1,A2,B2,C3'],
          },
          {
            id: 4,
            movieId: 4,
            datetime: '2023-06-21T02:05:59.422Z',
            name: 'string',
            availableSeats: ['A1,A2,B2,C3'],
          },
        ],
      },
    ],
  },
];

export const movies = [
  {
    id: 0,
    title: 'Everything Everywhere All at Once',
    duration: 135,
    imageUrl: 'coverurl',
    genres: [],
    synopsis: 'Movie synopsis',
    rating: 4,
    isShowing: true,
    releaseDate: '2022-06-21T02:05:59.422Z',
  },
  {
    id: 1,
    title: 'Star Wars: Episode IX',
    duration: 135,
    imageUrl: 'coverurl',
    genres: [],
    synopsis: 'Movie synopsis',
    rating: 4,
    isShowing: true,
    releaseDate: '2022-06-21T02:05:59.422Z',
  },
  {
    id: 2,
    title: 'Puss in Boots 2',
    duration: 135,
    imageUrl: 'coverurl',
    genres: [],
    synopsis: 'Movie synopsis',
    rating: 4,
    isShowing: true,
    releaseDate: '2022-06-21T02:05:59.422Z',
  },
  {
    id: 3,
    title: 'Shrek 2',
    duration: 125,
    imageUrl: 'coverurl',
    genres: [],
    synopsis: 'Movie synopsis',
    rating: 4,
    isShowing: false,
    releaseDate: '2022-06-21T02:05:59.422Z',
  },
  {
    id: 4,
    title: 'Fast X',
    duration: 135,
    imageUrl: 'coverurl',
    genres: [],
    synopsis: 'Movie synopsis',
    rating: 4,
    isShowing: true,
    releaseDate: '2022-06-21T02:05:59.422Z',
  },
];
