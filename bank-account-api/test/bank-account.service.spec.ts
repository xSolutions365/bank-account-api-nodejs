import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountService } from '../src/bank-account/bank-account.service';
import { BankAccount } from '../src/bank-account/bank-account.model';

describe('BankAccountService', () => {
  let service: BankAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankAccountService],
    }).compile();

    service = module.get<BankAccountService>(BankAccountService);
    service.initializeAccounts([]); // Clear accounts before each test
  });

  it('should return all accounts', () => {
    // Arrange
    const expectedAccounts = [
      new BankAccount(1, '123456', 'John Doe', 1000),
      new BankAccount(2, '654321', 'Jane Doe', 2000),
    ];
    
    expectedAccounts.forEach((acc) => service.createAccount(acc));

    // Act
    const accounts = service.getAllAccounts();

    // Assert
    expect(accounts.length).toBe(expectedAccounts.length);
  });

  it('should return a bank account by ID', () => {
    // Arrange
    const account = new BankAccount(1, '123456', 'John Doe', 1000);
    service.createAccount(account);

    // Act
    const result = service.getAccountById(1);

    // Assert
    expect(result).toBeDefined();
    expect(result.accountNumber).toBe(account.accountNumber);
  });

  it('should create an account', () => {
    // Arrange
    const account = new BankAccount(1, '123456', 'John Doe', 1000);

    // Act
    service.createAccount(account);
    const result = service.getAccountById(1);

    // Assert
    expect(result).toBeDefined();
    expect(result.accountNumber).toBe(account.accountNumber);
  });

  it('should update an account', () => {
    // Arrange
    const account = new BankAccount(1, '123456', 'John Doe', 1000);
    service.createAccount(account);
    account.balance = 1500;

    // Act
    service.updateAccount(account);
    const result = service.getAccountById(1);

    // Assert
    expect(result.balance).toBe(1500);
  });

  it('should delete an account', () => {
    // Arrange
    const account = new BankAccount(1, '123456', 'John Doe', 1000);
    service.createAccount(account);

    // Act
    service.deleteAccount(1);

    // Assert
    expect(() => service.getAccountById(1)).toThrow('Account with ID 1 not found');
  });

  it('should initialize accounts and clear existing ones', () => {
    // Arrange
    const account1 = new BankAccount(1, '123456', 'John Doe', 1000);
    service.createAccount(account1);
    const newAccounts = [
      new BankAccount(2, '654321', 'Jane Doe', 2000),
    ];

    // Act
    service.initializeAccounts(newAccounts);

    // Assert
    expect(service.getAllAccounts().length).toBe(newAccounts.length);
  });

  // it('should throw error for invalid account ID', () => {
  //   // Act & Assert
  //   expect(() => service.getAccountById(999)).toThrow('Account not found');
  // });

  // it('should throw error when updating non-existent account', () => {
  //   // Arrange
  //   const account = new BankAccount(999, '123456', 'John Doe', 1000);

  //   // Act & Assert
  //   expect(() => service.updateAccount(account)).toThrow('Account not found');
  // });

  // it('should not throw error when deleting non-existent account', () => {
  //   // Act & Assert
  //   expect(() => service.deleteAccount(999)).not.toThrow();
  // });

  // it('should throw error when creating duplicate account numbers', () => {
  //   // Arrange
  //   const account1 = new BankAccount(1, '123456', 'John Doe', 1000);
  //   const account2 = new BankAccount(2, '123456', 'Jane Doe', 2000); // Duplicate

  //   // Act
  //   service.createAccount(account1);

  //   // Assert
  //   expect(() => service.createAccount(account2)).toThrow('Duplicate account number');
  // });
});
