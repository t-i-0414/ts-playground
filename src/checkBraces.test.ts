import { checkBraces } from "./checkBraces";

describe("checkBraces", () => {
  it.each([
    {
      input: "()",
      expected: true,
    },
    {
      input: ")(",
      expected: false,
    },
    {
      input: "(",
      expected: false,
    },
    {
      input: ")",
      expected: false,
    },
    {
      input: "()()",
      expected: true,
    },
    {
      input: "(())",
      expected: true,
    },
    {
      input: "(()))(",
      expected: false,
    },
  ])("should return $expected if $input was entered", ({ input, expected }) => {
    expect(checkBraces(input)).toBe(expected);
  });
});
