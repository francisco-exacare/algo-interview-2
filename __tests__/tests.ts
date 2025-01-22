import { describe, expect, test } from "@jest/globals";
import { getMinimumSteps } from "../src";
import { testsInputs } from "../src/utils/testHelpers";

describe("Senior Living Community Escape Plan: Should return minimum number of steps to evacuate", () => {
  it.each(testsInputs)(
    "INPUT: $input. EXPECTED: [$output]",
    ({ input, output }) => {
      const result = getMinimumSteps(input);
      expect(result).toBe(output);
    }
  );
});
