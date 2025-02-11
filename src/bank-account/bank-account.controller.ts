import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccount } from './bank-account.model';

@Controller('api/BankAccount')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Get()
  getAllAccounts() {
    return this.bankAccountService.getAllAccounts();
  }

  @Get(':id')
  getAccountById(@Param('id') id: string): BankAccount {
    return this.bankAccountService.getAccountById(Number(id));
  }

  @Post()
  createAccount(@Body() account: BankAccount): void {
    this.bankAccountService.createAccount(account);
  }

  @Put(':id')
  updateAccount(@Param('id') id: string, @Body() updatedAccount: BankAccount): void {
    if (Number(id) !== updatedAccount.id) {
      throw new Error("Account ID mismatch.");
    }
    this.bankAccountService.updateAccount(updatedAccount);
  }

  @Delete(':id')
  deleteAccount(@Param('id') id: string): void {
    this.bankAccountService.deleteAccount(Number(id));
  }
}
