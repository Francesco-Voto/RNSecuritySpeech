import axios from 'axios';
import {initializeSslPinning} from 'react-native-ssl-public-key-pinning';

const API_ENDPOINT = 'rickandmortyapi.com';
const API_TIMEOUT = 20000;

const httpClient = axios.create({
  baseURL: `https://${API_ENDPOINT}/api`,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

const publicKeyHashes = [
  '7E+y6QfEb+IfF6tI5AJLcbBn67hVFfTFTkFpq9hPjHo=',
  '0Bbh/jEZSKymTy3kTOhsmlHKBB32EDu1KojrP3YfV9c=',
  'C5+lpZ7tcVwmwQIMcRtPbsQtWLABXhQzejna0wHFr8M=',
];

initializeSslPinning({
  [API_ENDPOINT]: {
    includeSubdomains: true,
    publicKeyHashes,
  },
});

export const get = <T>(
  url: string,
  params?: Record<string, any>,
  headers?: any,
) =>
  httpClient.get<T>(url, {
    params,
    headers,
  });
