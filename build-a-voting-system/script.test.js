import { describe, it, expect } from "vitest";
import { addOption } from "./script";
import { vote } from "./script";
import { displayResults } from "./script";

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

describe("vote", () => {
  it("Return Option does not exist , if option not in poll", () => {
    const option = "Germany";
    const voterId = 2;
    expect(vote(option, voterId)).toBe(`Option "${option}" does not exists.`);
  });
  it("Return Voter voted for , if option in poll and not duplicate", () => {
    const option = "Egypt";
    const voterId = 2;
    expect(vote(option, voterId)).toBe(
      `Voter ${voterId} voted for "${option}".`,
    );
    expect(vote(option, voterId)).toBe(
      `Voter ${voterId} has already voted for "${option}".`,
    );
  });
});

describe("displayResults", () => {
  it("Return poll results in a format", () => {
    const results = displayResults();
    expect(results).toBe(
      "Poll Results:\nGerman: 2 votes\nFrance: 2 votes\nSpain: 0 votes\nEgypt: 1 votes",
    );
  });
});
