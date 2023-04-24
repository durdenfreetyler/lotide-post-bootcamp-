const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function (array) {

  if (array.length === 1) {
    return [];
  }
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(1)
  }

};

const words = ["Yo Yo", "Lighthouse", "Labs"];

const result = tail(["Yo Yo", "Lighthouse", "Labs"]);

assertEqual(result[0], "Lighthouse")

assertEqual(result[1], "Labs");

assertEqual(words.length, 3);

// will always fail because JS doesn't allow equality comparability of arrays
assertEqual((tail(words)), ["Lighthouse", "Labs"])
