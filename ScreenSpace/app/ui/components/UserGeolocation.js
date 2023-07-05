import React, {useEffect, useState} from 'react';
import {Text, Button, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const UserGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        let permission;
        if (Platform.OS === 'android') {
          permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
        } else if (Platform.OS === 'ios') {
          permission = PERMISSIONS.IOS.LOCATION_ALWAYS;
        }

        const result = await request(permission);
        if (result === RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          setError('Location permission denied');
        }
      } catch (error) {
        console.log(error);
        setError('Error occurred while requesting location permission');
      }
    };

    requestLocationPermission();
  }, []);

  // ...

  return (
    <>
      {isLoading ? (
        <Text>Loading location...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <>
          <Text>Latitude: {location?.latitude}</Text>
          <Text>Longitude: {location?.longitude}</Text>
          <Button
            title="Get Location"
            onPress={() => {
              setIsLoading(true);
              setError(null);

              Geolocation.getCurrentPosition(
                position => {
                  setIsLoading(false);
                  const {latitude, longitude} = position.coords;
                  setLocation({latitude, longitude});
                },
                error => {
                  setIsLoading(false);
                  setError(error.message);
                },
                {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
              );
            }}
          />
        </>
      )}
    </>
  );
};

export default UserGeolocation;
