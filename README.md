# Code Challenge for Contalink

### 1. Questions

1. Respond using your own words (without using programming language) the steps you would follow to solve the following problems:

   1. How do you determine if a string of text is a palindrome? (A palindrome is a word that reads the same backward as forward. E.g., "Madam")

   **Answer**

   _I will use multiple-pointers approach, placing a pointer in the left and other one in the right. Then I would start comparing those positions to be equal, and moving them towards the center, until left is higher than right or the comparison is not true_

   2. Given an array of integers, how do you determine which one is the second largest among all those integers?

   **Answer**

   _I will use a `max` function, most of the languages have a function like this and I will do a for loop to traverse the array just once, tracking the numbers in a set, which also will remove duplicates. Then i will just remove the max element in the set, and return the next max number._

   3. How do you determine if two strings of text are anagrams? (An anagram is when two words contain exactly the same characters but in a different order. E.g., "listen" – "silent")

   **Answer**

   _To achieve this, first I would compare the words length, if lengths are the same, I would create a map for each word and use it as a frequency counter. Then just compare both maps and they must have the same frequency for each key. Otherwise, the two words are not an anagram._
