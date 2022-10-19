import { vi, test, expect } from "vitest";
import moduleFns from "./sample";

test("bar", () => {
  vi.spyOn(moduleFns, "fooFn").mockReturnValue("mockedFoo");
  const result = moduleFns.barFn();

  expect(result).toBe("mockedFoo");
});
