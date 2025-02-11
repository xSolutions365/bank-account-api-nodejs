import { BankAccount } from '../src/bank-account/bank-account.model';

describe('BankAccount Model', () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(1, '123456', 'John Doe', 1000);
  });

  it('should deposit money correctly', () => {
    account.deposit(500, 'ATM Credit');
    expect(account.balance).toBe(1500);
  });

  it('should throw an error when depositing with wrong transaction type', () => {
    expect(() => account.deposit(500, 'ATM Debit')).toThrow('Transaction type must be Credit.');
  });

  it('should withdraw money correctly', () => {
    account.withdraw(500, 'ATM Debit');
    expect(account.balance).toBe(500);
  });

  it('should throw an error when withdrawing more than balance', () => {
    expect(() => account.withdraw(2000, 'ATM Debit')).toThrow('Insufficient funds.');
  });

  it('should transfer money correctly', () => {
    const anotherAccount = new BankAccount(2, '654321', 'Jane Doe', 500);
    account.transfer(anotherAccount, 300);
    expect(account.balance).toBe(700);
    expect(anotherAccount.balance).toBe(800);
  });
});
