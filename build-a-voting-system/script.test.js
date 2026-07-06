import { describe, it, expect } from "vitest";
import { addOption } from "./script";

describe("addOption", () => {
  it("Return Added to the poll , if it does not exist and Return already exists , if its a duplicate", () => {
    const option = "Egypt";
    expect(addOption(option)).toBe(`Option "${option}" added to the poll.`);
    expect(addOption(option)).toBe(`Option "${option}" already exists.`);
  });
  it("Return Option cannoy be added if option empty", () => {
    expect(addOption("")).toBe("Option cannot be empty.");
  });
});
