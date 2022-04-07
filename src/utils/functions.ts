import GeoLocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import Geocoder from '@timwangdev/react-native-geocoder';
import { ObjectSchema } from 'yup';
import yupToObject from 'yup-to-object';
import { LOCATION_OPTIONS } from './constants';

export const validateForm = (
    values: Record<string, string | boolean>,
    schema: ObjectSchema<Record<string, any>>,
  ): string => {
    try {
      schema.validateSync(values, { abortEarly: false });
      return '';
    } catch (err) {
      const object = yupToObject(err);
      const originalKeys = Object.fromEntries(Object.entries(object).sort());
      const keys = Object.keys(originalKeys);
      return object[keys[0]];
    }
};

export const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const differenceInMs = now.getTime() - date.getTime();
  const differenceInMinutes = differenceInMs / (1000 * 60);
  const differenceInHours = differenceInMinutes / 60;
  const differenceInDays = differenceInHours / 24;

  if (differenceInDays >= 1) return `${Math.trunc(differenceInDays)}d ago`;
  if (differenceInHours >= 1) return `${Math.trunc(differenceInHours)}h ago`;
  else if (differenceInMinutes >= 1) return `${Math.trunc(differenceInMinutes)}m ago`;
  else return 'a few seconds ago';
};

export const getLocation = () => {
  return new Promise((res, rej) => {
    GeoLocation.getCurrentPosition((position) => {
      res(position);
    }, (error) => {
      rej(error);
    }, LOCATION_OPTIONS);
  });
};

export const requestLocationPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED)
    return getLocation();
};

export const getCity = async (latitude: number, longitude: number): Promise<string> => {
  const coords = { lat: latitude, lng: longitude };
  const position = await Geocoder.geocodePosition(coords, { maxResults: 1 });
  return (position[0]?.locality || position[0]?.subAdminArea || '');
};

export const requestCameraPermission = async () => {
  try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
      else return false;
  } catch (err) {
    return false;
  }
};

export const requestMessagePermission = async (): Promise<void> => {
  const authorizationStatus = await messaging().requestPermission();

  if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED)
    console.log('User has notification permissions enabled.');
  else if (authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL)
    console.log('User has provisional notification permissions.');
  else
    console.log('User has notification permissions disabled');
};

export const getFirebaseToken = async () =>  {
  return await messaging().getToken();
};
