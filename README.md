# TypeScript Exercises - Part 9

This repository contains exercises from part 9 of the course on TypeScript. The exercises focus on giving types to function parameters, variables, and writing type guards to ensure and narrow down the type of variables, especially when dealing with data from external sources like request bodies.

## Table of Contents

1. [Exercise 1: Giving Types](#exercise-1-giving-types)
2. [Exercise 2: Type Guards](#exercise-2-type-guards)

## Exercise 1: Giving Types

In this exercise, we learn how to give types to function parameters and variables to enhance type safety and improve code readability.

### Example 1: Typing Function Parameters

```typescript
// Example of typing function parameters
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // Outputs: Hello, Alice!
