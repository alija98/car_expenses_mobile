import axios from 'axios';
import {getUserToken} from '@utils/helpers/getUserToken';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async config => {
    const accessToken = await getUserToken();

    config.headers.set('Authorization', `Bearer ${accessToken}`);
    config.headers.set('Accept', 'application/json');
    config.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    console.log('token je', accessToken);
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default axios;
