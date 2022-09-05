/**
 * 객체가 null인지 판단합니다.
 */
const isEmpty = (object: any) => {
  if (object === null || object === "null" || object === undefined) {
    return true;
  }

  if (Array.isArray(object)) {
    return object.length === 0;
  }

  return false;
};
