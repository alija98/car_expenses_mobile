export type SignUpInFormInputs =
  | 'email'
  | 'password'
  | 'name'
  | 'passwordConfirmation';

export const ENGINE_VALUES: EngineTypes[] = [
  'diesel',
  'petrol',
  'electric',
  'hybrid',
];
export type EngineTypes = 'diesel' | 'petrol' | 'electric' | 'hybrid';

export type CarType = {
  id: string;
  brand: string;
  model: string;
  image: string;
  engineType: EngineTypes;
  registrationDate: string;
  nmbrOfKm: number;
  color: string;
  yearOfProduction: number;
};

export const TEMP_CAR_1: CarType = {
  id: '1',
  brand: 'Volkswagen',
  model: 'Golf VII',
  image:
    'https://img.autoabc.lv/volkswagen-golf/volkswagen-golf_2017_Hecbeks_222943336_4.jpg',

  engineType: 'diesel',
  registrationDate: new Date().toLocaleDateString(),
  nmbrOfKm: 80000,
  color: 'blue',
  yearOfProduction: 2014,
};

export const TEMP_CAR_2: CarType = {
  id: '2',
  brand: 'BMW',
  model: 'G30',
  images: [
    'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1590504175/autoexpress/2020/05/BMW%205%20Series%20facelift%202020-4.jpg',
  ],
  engineType: 'diesel',
  registrationDate: new Date().toLocaleDateString(),
  nmbrOfKm: 2000,
  color: 'blue',
  yearOfProduction: 2021,
};
