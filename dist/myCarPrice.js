"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isForm = exports.isMyCarPrices = exports.isMyCarPrice = void 0;
var isMyCarPrice = function (carPrice) {
    if (isEmpty(carPrice))
        return false;
    return !!carPrice.id;
};
exports.isMyCarPrice = isMyCarPrice;
var isMyCarPrices = function (carPrices) {
    return carPrices.every(exports.isMyCarPrice);
};
exports.isMyCarPrices = isMyCarPrices;
var isForm = function (form) {
    if (form === undefined || form === null)
        return false;
    return !!form.licensePlate;
};
exports.isForm = isForm;
