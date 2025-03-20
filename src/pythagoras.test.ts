import { isTriplet } from "./pythagoras";

test("valid triplet", () => {
  expect(isTriplet(3, 4, 5)).toBe(true);
});

test("invalid triplet", () => {
  expect(isTriplet(5, 5, 5)).toBe(false);
});
