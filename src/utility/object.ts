type SimpleObject = Record<string, string>;

export const areSimpleObjectsEqual = (
  obj1: SimpleObject,
  obj2: SimpleObject,
): boolean => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  return obj1Keys.length === obj2Keys.length
    ? obj1Keys.every((key) => obj1[key] === obj2[key])
    : false;
};

type MapValuesToKeysIfAllowed<T> = {
  [K in keyof T]: T[K] extends PropertyKey ? K : never;
};
type Filter<T> = MapValuesToKeysIfAllowed<T>[keyof T];

export function groupBy<
  T extends Record<PropertyKey, any>,
  Key extends Filter<T>
>(arr: T[], key: Key): Record<T[Key], T[]> {
  return arr.reduce((accumulator, val) => {
    const groupedKey = val[key];
    if (!accumulator[groupedKey]) {
      accumulator[groupedKey] = [];
    }
    accumulator[groupedKey].push(val);
    return accumulator;
  }, {} as Record<T[Key], T[]>);
}