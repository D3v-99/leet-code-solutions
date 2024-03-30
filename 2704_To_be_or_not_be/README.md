# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This code is a simple implementation of a testing utility function similar to Jest's expect function. It's used to make assertions about certain values in the code.

# Approach
<!-- Describe your approach to solving the problem. -->
We create an object inside the function so that methods can be called on the function.

The expect function takes a value and returns an object with two methods: toBe and notToBe. These methods are used to assert whether the given value is equal to or not equal to another value. If the assertion fails, an error is thrown.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time complexity: O(1) The time complexity is constant because the operations (equality and inequality checks) performed in the toBe and notToBe methods take constant time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity: O(1) The space complexity is also constant because no additional space that scales with input size is used.

# Code
```
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
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

        }
    }

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```