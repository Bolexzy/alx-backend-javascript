export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  let value = weakMap.get(endPoint);
  weakMap.set(endPoint, value ? value += 1 : 1);
  if (weakMap.get(endPoint) >= 5) throw new Error('Endpoint load is high');
}
