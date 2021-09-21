# Twig Education

# Variables

- numberOfGroups - number Of Groups
- array - array to be divided
- startIndex - the beginning of the slice
- endIndex - the end but not included in the slice

# How it works

1. if the given array is undefined or empty the function returns an empty array
2. if the number of groups to divide the function into is also undefined or 1 the original array will be returned as is.
3. the length of the array is then divided by numberOfGroups (eachGroupLength).
   1. if the results is not a whole number, find the ceiling (the next whole number as eachGroupLength) and starting from zero as the startIndex to (startIndex plus eachGroupLength) take a slice of the array and repeat till the end of the array.
   2. if the results is a whole number, starting from zero as the startIndex to (startIndex plus eachGroupLength) take a slice of the array and repeat till the end of the array.
