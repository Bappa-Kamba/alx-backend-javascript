export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const subs = [];
  set.forEach((val) => {
    const substring = val.startsWith(startString) ? val.slice(startString.length) : '';
    if (substring) subs.push(substring);
  });
  return subs.join('-');
}
