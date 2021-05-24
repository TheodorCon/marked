// function taken from:
// https://www.section.io/engineering-education/an-introduction-to-memoization-in-javascript/
let memoCounter = 0;

const getCounter = () => memoCounter

const memoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    memoCounter++;
    return results[argsKey];
  };
};

module.exports = { memoize, getCounter };
