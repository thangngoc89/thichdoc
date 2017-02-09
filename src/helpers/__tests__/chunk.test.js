import chunk from "../chunk";

test("it should split array into chunk", () => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  expect(chunk(a, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
});
