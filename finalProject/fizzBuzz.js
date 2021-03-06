/*For any number that is a multiple of 3, log 'Fizz'
For any number that is a multiple of 5, log 'Buzz'
For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
For all other numbers, log the number.
The output of you program will look something like this:

=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz*/

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 != 0) {
    console.log('Fizz')
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log('Buzz')
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz')
  } else {
    console.log(i)
  }
};
