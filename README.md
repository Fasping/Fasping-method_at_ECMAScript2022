#Method_at_ECMAScript2022
Many programming languages like Python, Ruby, etc have the ability to do ‘negative indexing’ arr[-1]. It means we can access the elements of the array from the end by specifying the negative index.

Unfortunately, this feature was missing in JavaScript. The JavaScript design made it difficult to support this feature. The [] syntax is used for accessing array and object.

obj[1] refers to accessing the value of key 1. Similarly, obj[-1] refers to accessing the value of key -1, instead of returning the last property of an object. Many approaches(accessing the .last property) were taken to work around this problem.

Finally, the at() method was introduced in ECMAScript 2022 and the long-standing request from programmers was answered.

Suppose we have an array sorted in ascending order. We want to get the greatest number in the sorted array.
