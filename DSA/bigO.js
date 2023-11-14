/* What is Big O
Big O is a way to categorize your algorithms time or memory requirements based on input. It is not meant to be an exact measurement. It will not tell you how many CPU cycles it takes, instead it is meant to generalize the growth of your algorithm.



Example
So when someone says Oh of N, they mean your algorithm will grow linearily based on input.

Why do we use it?
Often it will help us make decisions about what data structures and algorithms to use. Knowing how they will perform can greatly help create the best possible program out there.

So lets do a small example
First, Lets consider the following code.

function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}
For those that know big o, this is easy
But those who have never even classified a function, this may be a complete mystery. That is fine.

Big O, said differently
As your input grows, how fast does computation or memory grow?



Important concepts
growth is with respect to the input


In the real world
obviously memory growing is not computationally free, but in the matter of thinking about algorithms, we don't necessarily think about that.



In languages like Go or JavaScript you pay even heavier penalties because the memory can be kept around, grows faster, and causes complete halts in your program for cleanup

Lets go back to our example
Lets look at input. How does our program's execution time grow with respect to input?

function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}
 */

function sumString(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}
console.log(sumString("nico"));
console.log(sumString("milo"));
console.log(sumString("siggy"));
