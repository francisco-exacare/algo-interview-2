export interface TestInput {
  input: number[];
  output: number;
}

export const testsInputs: TestInput[] = [
  // Start at hall 0. Move to hall 1.
  // From hall 1, move to hall 4 (exit).
  // Total moves: 2.
  {
    input: [2, 3, 1, 1, 5],
    output: 2,
  },
  // Start at hall 0 (value 1).
  // Move to hall 1 (value 2).
  // From hall 1, you can move to hall 2 (value 0) or hall 3. Move to hall 3 (exit).
  // Total moves: 2.
  {
    input: [1, 2, 0, 1],
    output: 2,
  },
  // You are already at the exit. No moves are needed.
  {
    input: [1],
    output: 0,
  },
  // Move from hall 0 → hall 1 → hall 2 → hall 3 → hall 4 (exit).
  // Total moves: 4
  {
    input: [1, 1, 1, 1, 1],
    output: 4,
  },
  // Start at hall 0. You can move to halls 1, 2, or 3.
  // From hall 3, no further steps can be taken because its value is 0.
  // The exit (hall 4) is unreachable.
  {
    input: [3, 2, 1, 0, 4],
    output: -1,
  },
  // Start at hall 0. Move directly to hall 5 (exit).
  // Total moves: 1
  {
    input: [5, 2, 3, 1, 1, 1],
    output: 1,
  },
  // Start at hall 0. Move to hall 2.
  // From hall 2, move to hall 6 (exit).
  // Total moves: 2.
  {
    input: [2, 1, 4, 1, 1, 1, 5],
    output: 2,
  },
  // Start at hall 0. Move to hall 1.
  // From hall 1, move to hall 3.
  // From hall 3, move to hall 6.
  // From hall 6, move to hall 9 (exit).
  // Total moves: 4.
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    output: 4,
  },
];
