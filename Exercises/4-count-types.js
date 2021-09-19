'use strict';
const countTypesInArray = (arr) => {
  const count = {};
  for (const a of arr) {
    const NumOrZerro = count[typeof(a)] || 0;
    count[typeof(a)] = NumOrZerro + 1;
  }
  return count;
};


module.exports = { countTypesInArray };
