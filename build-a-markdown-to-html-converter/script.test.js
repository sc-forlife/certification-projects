import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { convertMarkdown } from "./script.js";

describe("convertMarkdown", () => {
  it("Return string Converted to HTML", () => {
    const match = convertMarkdown("# Hello");

    expect(match).toBe("<h1>Hello</h1>");
  });

  it("Return 6#s string Converted to HTML", () => {
    const match = convertMarkdown("###### Hello");

    expect(match).toBe("<h6>Hello</h6>");
  });

  it("Return 7#s string without conversion", () => {
    const match = convertMarkdown("####### Hello");

    expect(match).toBe("####### Hello");
  });

  it("Return string with italics only", () => {
    const match = convertMarkdown("*Hello*");

    expect(match).toBe("<p><em>Hello</em></p>");
  });
});
