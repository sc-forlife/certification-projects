import { expect, it, describe } from "vitest";
import { BankAccount } from "./script";

describe("Bank Account", () => {
  it("Deposit Amount and withdrawls", () => {
    const myBank = new BankAccount();
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
      "Successfully withdrew $200. New balance: $0",
    );
    expect(myBank.checkBalance()).toEqual("Current balance: $0");
  });
  it("ListAllDeposits", () => {
    const myBank = new BankAccount();
    myBank.deposit(10);
    myBank.deposit(35);
    myBank.deposit(90);
    expect(myBank.listAllDeposits()).toEqual("Deposits: 10,35,90");
  });
  it("ListAllWithdrawls", () => {
    const myBank = new BankAccount();
    myBank.deposit(170);
    myBank.withdraw(20);
    myBank.withdraw(50);
    myBank.withdraw(100);
    expect(myBank.listAllWithdrawals()).toEqual("Withdrawals: 20,50,100");
  });
});
