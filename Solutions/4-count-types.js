'use strict';

const countTypesInArray = (arr) => {
  const counters = {};
  for (const element of arr) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};
// if (typeof(type) === 'number') countTypesInArray.number++;
  //else if (typeof(type) === 'string') countTypesInArray.string++;
  //else if (typeof(type) === 'boolean') countTypesInArray.boolean++;


module.exports = { countTypesInArray };
