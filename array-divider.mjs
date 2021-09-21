export function groupArrayElements(array, numberOfGroups = 1) {
  if (!Array.isArray(array) || !array?.length) return [];

  let length = array.length;
  let results = [];

  // find the maximum number of members in each group
  const eachGroupLength = Math.ceil(length / numberOfGroups);

  let startIndex = 0;
  let nextGroup = [];
  for (let index = 0; index < numberOfGroups; index++) {
    let endIndex = startIndex + eachGroupLength;

    if (index === 0) startIndex = index;
    nextGroup = array.slice(startIndex, endIndex);

    // prevents adding empty arrays to the groups
    if (nextGroup.length) results = [...results, nextGroup];

    startIndex = endIndex;
  }

  return results;
}
