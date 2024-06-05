export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const result = Array.from(set)
    .filter((val) => val.startsWith(startString))
    .map((val) => val.slice(startString.length))
    .join('-');

  return result;
}
