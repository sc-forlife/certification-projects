import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { convertMarkdown } from "./script.js";
import { wordToImage } from "./script.js";

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

describe("wordToImage", () => {
  it("Return string converted into Image element", () => {
    const match = convertMarkdown("![alt-text](image-source)");
    expect(match).toBe('<img alt="alt-text" src="image-source">');
  });
  it("Return multi line string converted into Image element", () => {
    const match = convertMarkdown(
      "![alt-text](image-source)\n![alt-text2](image-source2)",
    );
    expect(match).toBe(
      '<img alt="alt-text" src="image-source">\n<img alt="alt-text2" src="image-source2">',
    );
  });
});

describe("wordToLink", () => {
  it("Return string converted into Link element", () => {
    const match = convertMarkdown("[link text](URL)");
    expect(match).toBe('<a href="URL">link text</a>');
  });
  it("Return multi line string converted into Link element", () => {
    const match = convertMarkdown("[link text](URL)\n[link text2](URL2)");
    expect(match).toBe(
      '<a href="URL">link text</a>\n<a href="URL2">link text2</a>',
    );
  });
});

describe("blockquote", () => {
  it("Return string converted into blockquote element", () => {
    const match = convertMarkdown("> this is a quote");
    expect(match).toBe("<blockquote>this is a quote</blockquote>");
  });
  it("Return multi line string converted into blockquote element", () => {
    const match = convertMarkdown(
      "> this is a quote \n> this is another quote",
    );
    expect(match).toBe(
      "<blockquote>this is a quote </blockquote>\n<blockquote>this is another quote</blockquote>",
    );
  });
  it("Return string not converted into blockquote element", () => {
    const match = convertMarkdown("some text > this is a quote");
    expect(match).toBe("some text > this is a quote");
  });
  it("Return string converted into blockquote and bold and italics element", () => {
    const match = convertMarkdown("> **this is a *quote***");
    expect(match).toBe(
      "<blockquote><strong>this is a <em>quote</em></strong></blockquote>",
    );
  });
});
