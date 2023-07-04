export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw Error('Cannot process');
  }

  return groceries.forEach((value, key) => {
    groceries.set(key, value === 1 ? 100 : value);
  });
}
