import {API_PATHS} from '../utils/helpers/apiPaths';
import axios from '../utils/helpers/axios';

export default class CarsService {
  static getCars = async () => await axios.get(API_PATHS.getCars());
  static addCar = async (data: any) =>
    await axios.post(API_PATHS.addCar(), data);
}
