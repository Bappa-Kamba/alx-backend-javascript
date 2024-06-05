export default function hasValuesFromArray(set, array) {
  let contained = true;
  for (const item of array) {
    if (!set.has(item)) contained = false;
  }
  return contained;
}
