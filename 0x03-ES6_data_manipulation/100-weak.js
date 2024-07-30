export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (weakMap.has(endPoint)) {
    const call = weakMap.get(endPoint);
    if (call >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endPoint, call + 1);
  } else {
    weakMap.set(endPoint, 1);
  }
}
