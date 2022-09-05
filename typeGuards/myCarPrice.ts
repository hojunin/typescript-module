import { CAR_PRICE, FetchDataForm } from '../types/myCarPrice';
import { isEmpty } from '../utils/nullcheck';

const isMyCarPrice = (carPrice: unknown): carPrice is CAR_PRICE => {
    if (isEmpty(carPrice)) return false;
    return !!(carPrice as CAR_PRICE).id;
};

const isMyCarPrices = (carPrices: unknown[]): carPrices is CAR_PRICE[] => {
    return (carPrices as CAR_PRICE[]).every(isMyCarPrice);
};

const isForm = (form: unknown): form is FetchDataForm => {
    if (form === undefined || form === null) return false;
    return !!(form as FetchDataForm).licensePlate;
};

export { isMyCarPrice, isMyCarPrices, isForm };
