import {API_PATHS} from '../utils/helpers/apiPaths';
import axios from '../utils/helpers/axios';
import {CreateUserPost, LogInUserPost} from '../utils/helpers/types';

export default class UserService {
  static createUser = async (data: CreateUserPost) =>
    await axios.post(API_PATHS.createAccount(), data);
  static logInUser = async (data: LogInUserPost) =>
    await axios.post(API_PATHS.signIn(), data);
}
