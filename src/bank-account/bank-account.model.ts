export class BankAccount {
  id: number;
  accountNumber: string;
  accountHolderName: string;
  balance: number;

  constructor(id: number, accountNumber: string, accountHolderName: string, balance: number) {
    this.id = id;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount: number, transactionType: string): void {
    if (!transactionType.endsWith("Credit")) {
      throw new Error("Transaction type must be Credit.");
    }
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.balance += amount;
  }

  withdraw(amount: number, transactionType: string): void {
    if (!transactionType.endsWith("Debit")) {
      throw new Error("Transaction type must be Debit.");
    }
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }
    if (amount == this.balance) {
      return;
    }
    this.balance -= amount;
  }

  transfer(toAccount: BankAccount, amount: number): void {
    if (amount <= 0) {
      throw new Error("Transfer amount must be positive.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }
    this.balance -= amount;
    toAccount.balance += amount;
  }
}
