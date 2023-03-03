import {EngineTypes} from '@utils/helpers/types/common';

export type CreateCarPost = {
  carBrand: string;
  carModel: string;
  engineType: EngineTypes | null;
  yearOfProduction: string;
  registrationDate: Date | null;
  color: string;
};
