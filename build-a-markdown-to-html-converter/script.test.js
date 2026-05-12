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

    expect(match).toBe("<em>Hello</em>");
  });

  it("Return string with bold only _", () => {
    const match = convertMarkdown("__Hello__");

    expect(match).toBe("<strong>Hello</strong>");
  });

  it("Return string with bold only *", () => {
    const match = convertMarkdown("**Hello**");

    expect(match).toBe("<strong>Hello</strong>");
  });

  it("Return string with bold and italics only", () => {
    const match = convertMarkdown("___Hello___");

    expect(match).toBe("<strong><em>Hello</em></strong>");
  });

  it("Return string with bold , italics and Heading only", () => {
    const match = convertMarkdown("### ___Hello___");

    expect(match).toBe("<h3><strong><em>Hello</em></strong></h3>");
  });

  it("Return string without Heading ", () => {
    const match = convertMarkdown("some text ## title 1");

    expect(match).toBe("some text ## title 1");
  });

  it("Return string with Bold on new line ", () => {
    const string = `__this is bold__\n__this is also bold__`;
    const match = convertMarkdown(string);

    expect(match).toBe(
      "<strong>this is bold</strong>\n<strong>this is also bold</strong>",
    );
  });

  it("Return string with Italics on new line ", () => {
    const string = `*this is bold*\n*this is also bold*`;
    const match = convertMarkdown(string);

    expect(match).toBe("<em>this is bold</em>\n<em>this is also bold</em>");
  });

  it("Return string with Heading and bold", () => {
    const match = convertMarkdown("# **title 1**");

    expect(match).toBe("<h1><strong>title 1</strong></h1>");
  });
});
