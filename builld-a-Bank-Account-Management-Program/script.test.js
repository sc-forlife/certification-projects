import { expect, it, describe } from "vitest";
import { BankAcoount } from "./script";

desciribe("Bank Account", () => {
  it("Deposit Amount", () => {
    const myBank = new BankAcoount();
    expect(myBank.withdraw(-50)).toEqual(
      "Insufficient balance or invalid amount.",
    );
    expect(myBank.deposit(100)).toEqual(
      "Successfully deposited $100. New balance: $100",
    );
    expect(myBank.deposit(-50)).toEqual(
      "Deposit amount must be greater than zero.",
    );
    expect(myBank.deposit(0)).toEqual(
      "Deposit amount must be greater than zero.",
    );
    expect(myBank.withdraw(150)).toEqual(
      "Insufficient balance or invalid amount.",
    );
    expect(myBank.withdraw(0)).toEqual(
      "Insufficient balance or invalid amount.",
    );
    expect(myBank.deposit(100)).toEqual(
      "Successfully deposited $100. New balance: $200",
    );
    expect(myBank.withdraw(200)).toEqual(
      "Successfully withdrew $150. New balance: $50",
    );
    expect(myBank.checkBalance()).toEqual("Current balance: $200");
  });
});
