import axios from 'axios';

/**
 * Http Utility.
 */
const baseURL =
  process.env.REACT_APP_BASE_URL ||
  window.location.protocol + '//' + window.location.hostname + '/api/v1';
window.console.log('Base URl', baseURL);
const http = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
