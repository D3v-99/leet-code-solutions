let expect = function (val) {
  return {
    toBe: function (val1) {
      if (val === val1) {
          return  true ;
      } else {
          throw new Error('Not Equal');
      }
    },

    notToBe: function (val2) {
      if (val2 !== val) {
        return  true ;
    } else {
        throw new Error('Equal');
    }
    },
  };
};

console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
