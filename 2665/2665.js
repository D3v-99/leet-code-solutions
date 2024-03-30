function createCounter(init) {

  //initilaize this so that you dont mutate directly
  let counter = init;
  
  return ({
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    },
    reset: function(){
      return counter = init;
    }
  })
}

const counter = createCounter(0)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.reset())