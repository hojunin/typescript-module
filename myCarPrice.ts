import { ID } from "./common";

export interface CAR_PRICE {
  brand: string;
  colorCodeKr: string;
  displacement: number;
  driveDistance: number;
  firstRegisterFull: string;
  firstRegisterMonth: number;
  firstRegisterYear: number;
  fuelCode: string;
  fuelCodeKR: string;
  grade: string;
  id: ID;
  imageUrl: URL;
  licensePlate: string;
  model: string;
  modelRepr: string;
  newCarPrice: number;
  priceAfter1y: number;
  priceAfter2y: number;
  priceAfter3y: number;
  priceAfter6m: number;
  priceAvg: number;
  priceBefore6m: number;
  priceMax: number;
  priceMin: number;
  userName: string;
  viewMonth: number;
  viewYear: number;
}

export interface FetchDataForm {
  licensePlate: string;
  userName: string;
  distance: number;
  isPrivately: boolean;
}

export const isMyCarPrice = (carPrice: unknown): carPrice is CAR_PRICE => {
  if (isEmpty(carPrice)) return false;
  return !!(carPrice as CAR_PRICE).id;
};

export const isMyCarPrices = (
  carPrices: unknown[]
): carPrices is CAR_PRICE[] => {
  return (carPrices as CAR_PRICE[]).every(isMyCarPrice);
};

export const isForm = (form: unknown): form is FetchDataForm => {
  if (form === undefined || form === null) return false;
  return !!(form as FetchDataForm).licensePlate;
};
