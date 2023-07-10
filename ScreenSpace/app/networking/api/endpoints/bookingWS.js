import axios from '../Api';

export const getBookingAPI = async userId => {
  const results = await axios.get(`/api/bookings/${userId}`);
  return results.data;
};

export const newBooking = async (userId, bookingInfo) => {
  const results = await axios.post(
    '/api/bookings/',
    {
      userId: userId,
      showId: bookingInfo.showId,
      timetable: new Date().toISOString(),
      seats: bookingInfo.seats,
    },
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    },
  );
  return results.data;
};
