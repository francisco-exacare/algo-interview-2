export interface TestInput {
  input: number[];
  output: number;
}

export const testsInputs: TestInput[] = [
  {
    input: [2, 3, 1, 1, 5],
    output: 2,
  },
  {
    input: [1, 2, 0, 1],
    output: 2,
  },
  {
    input: [1],
    output: 0,
  },
  {
    input: [1, 1, 1, 1, 1],
    output: 4,
  },
  {
    input: [3, 2, 1, 0, 4],
    output: -1,
  },
  {
    input: [5, 2, 3, 1, 1, 1],
    output: 1,
  },
  {
    input: [2, 1, 4, 1, 1, 1, 5],
    output: 2,
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    output: 4,
  },
];
