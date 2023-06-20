import axios from '../Api';

export const getCinemas = async ownerId => {
  const results = await axios.get(`/cinemas?ownerID=${ownerId}`);
  return results.data;
};

export const newCinema = async (ownerId, cinemaInfo) => {
  console.log()
  body = {
    "userId": ownerId,
    "name": cinemaInfo.cinemaName,
    "company": cinemaInfo.companyName,
    "calle": cinemaInfo.address,
    "numero": cinemaInfo.postalCode,
    "localidad": cinemaInfo.city,
    "provincia": cinemaInfo.province,
    "pais": cinemaInfo.country,
    "seatCosts": parseInt(cinemaInfo.pricePerShow, 10),
    "available": cinemaInfo.active == null ? false : true
  }
  const results = await axios.post('/cinemas', body);
  return results.data;
};
