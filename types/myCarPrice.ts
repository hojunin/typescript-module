import { ID } from './common';

interface CAR_PRICE {
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

interface FetchDataForm {
    licensePlate: string;
    userName: string;
    distance: number;
    isPrivately: boolean;
}

export type { CAR_PRICE, FetchDataForm };
