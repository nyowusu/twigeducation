import { groupArrayElements } from "./array-divider.mjs";

let array;
let numberOfGroups;

// called with TDZ array
let groups = groupArrayElements(array, 2);
console.log({ array, numberOfGroups: 2, groups });
console.log("\n");

// called with null
groups = groupArrayElements(null, 3);
console.log({ array: null, numberOfGroups: 3, groups });
console.log("\n");

// called with undefined
groups = groupArrayElements(undefined, 3);
console.log({ array: undefined, numberOfGroups: 3, groups });
console.log("\n");

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numberOfGroups = 3;

groups = groupArrayElements(array, numberOfGroups);
console.log({ array, numberOfGroups, groups });
console.log("\n");

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numberOfGroups = 5;

groups = groupArrayElements(array, numberOfGroups);
console.log({ array, numberOfGroups, groups });
console.log("\n");

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numberOfGroups = 6;

groups = groupArrayElements(array, numberOfGroups);
console.log({ array: undefined, numberOfGroups: 3, groups });
console.log("\n");
