import prune from "../prune";

test("should not prune if longer", () => {
  expect(prune("Sha blah blah", 100)).toEqual("Sha blah blah");
});

test("should prune if shorter", () => {
  expect(prune("Sha blah blah", 6)).toEqual("Sha…");
});
test("should not prune if equal", () => {
  expect(prune("Sha blah blah", 13)).toEqual("Sha blah blah");
});
