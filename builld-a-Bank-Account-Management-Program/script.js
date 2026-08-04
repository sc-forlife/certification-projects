export class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(depositAmount) {
    if (depositAmount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    this.transactions.push({ type: "deposit", amount: depositAmount });
    this.balance += depositAmount;
    return `Successfully deposited $${depositAmount}. New balance: $${this.balance}`;
  }
  withdraw(withdrawAmount) {
    if (withdrawAmount > 0 && withdrawAmount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: withdrawAmount });
      this.balance -= withdrawAmount;
      return `Successfully withdrew $${withdrawAmount}. New balance: $${this.balance}`;
    } else if (withdrawAmount <= 0 || withdrawAmount > this.balance) {
      return `Insufficient balance or invalid amount.`;
    }
  }
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }
  listAllDeposits() {
    const depositTransactions = this.transactions.filter(
      (transaction) => transaction.type === "deposit",
    );
    return `Deposits: ${depositTransactions.map((transaction) => `${transaction.amount}`)}`;
  }
  listAllWithdrawals() {
    const withdrawTransactions = this.transactions.filter(
      (transaction) => transaction.type === "withdraw",
    );
    return `Withdrawals: ${withdrawTransactions.map((transaction) => `${transaction.amount}`)}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(50);
myAccount.deposit(150);
myAccount.withdraw(10);
myAccount.withdraw(20);
myAccount.withdraw(15);
myAccount.withdraw(30);
