import { expect, test } from "@jest/globals";
// import { screen } from "@testing-library/react-native";

test("it won't let me commit unrelated files without this", () => {
  expect(1 + 2).toEqual(3);
});
describe("HomeScreen", () => {
  test("Lists stuff", () => {
    expect(screen.getByRole("Text")).toBeTruthy();
  });
});
