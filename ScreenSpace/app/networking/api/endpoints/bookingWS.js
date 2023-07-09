import axios from '../Api';

export const getBookingAPI = async userId => {
  const results = await axios.get(`/api/bookings?userId=${userId}`);
  return results.data;
};

export const newBooking = async (userId, bookingInfo) => {
  body = {
    userId: userId,
    showId: bookingInfo.showId,
    timetable: new Date(),
    seats: ['A1'],
  };
  const results = await axios.get(`/api/bookings`, body);
  return results.data;
};
