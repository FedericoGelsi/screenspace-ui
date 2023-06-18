import axios from 'axios';

export const fetchCinemas = id => {
  fetch(
    'http://screenspace-api.us-east-1.elasticbeanstalk.com/api/cinemas?ownerID=1',
  )
    .then(response => response.json())
    .then(data => {
      // Process the received data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Error:', error);
    });
};
