import axios from '../Api';

export const getBookingAPI = async userId => {
  const results = await axios.get(`/api/bookings/${userId}`);
  return results.data;
};

export const newBooking = async (userId, bookingInfo) => {
  body = {
    userId: userId,
    showId: bookingInfo.showId,
    timetable: new Date().toISOString(),
    seats: bookingInfo.seats,
  };
  const results = await axios.post(`/api/bookings`, body);
  return results.data;
};
