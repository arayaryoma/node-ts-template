import { describe, expect, it } from "@jest/globals";

describe("sample test", () => {
  it("should be truthy", () => {
    expect([]).toBeTruthy();
  });
  it("should be falsy", () => {
    expect(NaN).toBeFalsy();
  });
});
