import React from "react";
import Button from "../Button";
import renderer from "react-test-renderer";

const getTree = props => {
  const component = renderer.create(
    <Button name="Button" onButtonClick={jest.fn()} {...props} />
  );
  return component.toJSON();
};

test("Normal button", () => {
  expect(getTree()).toMatchSnapshot();
});
test("Bold button", () => {
  expect(getTree({ bold: true })).toMatchSnapshot();
});
test("Different size button", () => {
  expect(getTree({ size: "big" })).toMatchSnapshot();
});
test("Block button", () => {
  expect(getTree({ block: true })).toMatchSnapshot();
});
test("Custom class names button", () => {
  expect(getTree({ className: "foo" })).toMatchSnapshot();
});
test("All options button", () => {
  expect(
    getTree({ block: true, bold: true, size: "med", className: "foo" })
  ).toMatchSnapshot();
});

test("Trigger button onClick", () => {
  const spy = jest.fn();
  let tree = getTree({ onButtonClick: spy });
  expect(tree).toMatchSnapshot();
  tree.props.onClick();
  expect(spy.mock.calls.length).toBe(1);
});
