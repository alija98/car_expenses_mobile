import axios from 'axios';
// import {AxiosHeaders} from 'axios';
// import refreshAccessToken from 'utils/helpers/refreshToken';
// import { getUserToken } from 'utils/helpers/refreshToken';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async config => {
    // const accessToken = await getUserToken();
    const accessToken = 'test';

    config.headers.set(
      'Authorization',
      `Bearer ${accessToken}`,
      //   Accept: 'application/json',
      //   'Content-Type': 'application/x-www-form-urlencoded',
    );
    config.headers.set('Accept', 'application/json');
    config.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default axios;
