# Senior Living Community Escape Plan

## Problem Statement

A senior living community is testing its emergency evacuation procedures. The community consists of a series of interconnected halls arranged in a straight line. Each hall contains a number that represents the maximum number of steps you can take from that hall to other halls further down the line. Your goal is to determine the minimum number of steps required to reach the exit of the building, which is located at the last hall.

## Rules

- You always start in the first hall (index 0).
- The number at each hall represents the maximum distance (in steps) you can move forward from that hall. For example:
- If the number in the current hall is 3, you can move to any of the next 1, 2, or 3 halls.
- You cannot move backward.
- Your objective is to find the minimum number of steps required to reach the exit hall.

## Input

A single array of positive integers, where each integer represents the maximum number of steps you can take forward from that hall.
- Example: [2, 3, 1, 1, 4]

## Output

A single integer representing the minimum number of steps needed to reach the exit. If it's impossible to reach the exit, return -1.

## Constraints

- The array will always have at least one element (the starting hall).
- If the array has only one element, you are already at the exit, and no moves are needed.
- The array will contain only positive integers.

## Examples

## Example 1

**Input**

`[2, 3, 1, 1, 5]`

**Output**: `2`

**Explanation**

- Start at hall 0 (value 2).
- From hall 0, you can move to hall 1 or hall 2. move to hall 1 (value 3).
- From hall 1, you can move to hall 2, 3, or 4. move to hall 4 (exit).
- Total moves: 2.

## Example 2

**Input**

`[1, 2, 0, 1]`

**Output**: `2`

**Explanation**

- Start at hall 0 (value 1).
- move to hall 1 (value 2).
- From hall 1, you can move to hall 2 (value 0) or hall 3. move to hall 3 (exit).
- Total moves: 2.