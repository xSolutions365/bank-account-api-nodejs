import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { BankAccount } from './bank-account.model';

@Injectable()
export class BankAccountService {
  private static accounts: BankAccount[] = [];

  getAllAccounts(): BankAccount[] {
    return BankAccountService.accounts;
  }

  getAccountById(id: number): BankAccount {
    const account = BankAccountService.accounts.find(acc => acc.id === id);
    if (!account) throw new NotFoundException(`Account with ID ${id} not found`);
    return account;
  }

  addAccount(account: BankAccount): void {
    BankAccountService.accounts.push(account);
  }

  createAccount(account: BankAccount): void {
    account.id = BankAccountService.accounts.length + 1;
    BankAccountService.accounts.push(account);
  }

  updateAccount(updatedAccount: BankAccount): void {
    const index = BankAccountService.accounts.findIndex(a => a.id === updatedAccount.id);
    if (index === -1) throw new NotFoundException(`Account with ID ${updatedAccount.id} not found`);
    
    BankAccountService.accounts[index] = updatedAccount;
  }

  deleteAccount(id: number): void {
    try {
      const index = BankAccountService.accounts.findIndex(a => a.id === id);
      if (index === -1) throw new NotFoundException(`Account with ID ${id} not found`);
      BankAccountService.accounts.splice(index, 1);
    } catch (error) {
      throw new BadRequestException(`Could not delete account: ${error.message}`);
    }
  }

  initializeAccounts(accounts: BankAccount[]): void {
    BankAccountService.accounts = accounts;
  }
}
