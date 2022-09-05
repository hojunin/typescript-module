"use strict";
/**
 * 객체가 null인지 판단합니다.
 */
var isEmpty = function (object) {
    if (object === null || object === "null" || object === undefined) {
        return true;
    }
    if (Array.isArray(object)) {
        return object.length === 0;
    }
    return false;
};
