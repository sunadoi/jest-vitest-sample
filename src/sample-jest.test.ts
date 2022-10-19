import { jest } from "@jest/globals";
import moduleFns from "./sample";

test("bar", () => {
  jest.spyOn(moduleFns, "fooFn").mockReturnValue("mockedFoo");
  const result = moduleFns.barFn();

  expect(result).toBe("mockedFoo");
});
