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

/* 
Lets look at input. How does our program's execution time grow with respect to input?
- let first notice it is a string
- it has a a length and i has a serice of characters asociated with it
- strings are afectelly arrays
- if you look at the for loop it has to execute the length of the string
- so that means if our string grows by 50% ; how much slower is our function? 50%.
- it grows linearly
- one more unit of string there is; one more loop it has to do  

Me> It may or may not be obvious, but we have an N relationship. O(N) time complexity


You> How can you tell?

Simplest trick for complexity
Look for loops

function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

- Where do you look over the input? if you see that is the easiest way to tell the big O complexity

What's the running time
If the previous was O(N), what's this?

function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

*/

function dubSumString(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}
console.log(dubSumString("nico"));
console.log(dubSumString("milo"));
console.log(dubSumString("siggy"));

/* 
Important concepts
growth is with respect to the input
Constants are dropped
O(2N) -> O(N) and this makes sense. That is because Big O is meant to describe the upper bound of the algorithm (the growth of the algorithm). The constant eventually becomes irrelevant.



Take the following:

N = 1, O(10N) = 10, O(N^2) = 1


N = 5, O(10N) = 50, O(N^2) = 25


N = 100, O(10N) = 1,000, O(N^2) = 10,000 // 10x bigger


N = 1000, O(10N) = 10,000, O(N^2) = 1,000,000 // 100x bigger


N = 10000, O(10N) = 100,000, O(N^2) = 100,000,000 // 1000x bigger

-Constants are not nesesary important. W are not trying to get exact time or how many units of CPU you need to use. We  care about how does it grow?

There is practical vs theoretical differences
Just because N is faster than N^2, doesn't mean practically its always faster for smaller input.



Remember, we drop constants. Therefore O(100N) is faster than O(N^2) but practically speaking, you would probably win for some small set of input.

Lets do another example
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        const charCode = n.charCodeAt(i);
        // Capital E
        if (charCode === 69) {
            return sum;
        }

        sum += charCode;
    }

    return sum;
}

*/
function charSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode === 69) {
      return sum;
    }
    sum += charCode;
  }
  return sum;
}

console.log(charSum("Hell0HHHELLO"));
/* 

In BigO we often consider the worst case
Especially in interviews (i have never been asked for best, average, and worst case, just worst case).

E = 69

Therefore any string with E in it will terminate early (unless E is the last item in the list).

ITS STILL O(N)

Important concepts
1.growth is with respect to the input
2.Constants are dropped
3.Worst case is usually the way we measure,
-- When ever you are doing an interview its alway going to be the worst case scenario
*/
