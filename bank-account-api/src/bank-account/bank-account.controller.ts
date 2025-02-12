import { Controller, Get, Post, Put, Delete, Param, Body, BadRequestException, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
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
  updateAccount(@Param('id') id: string, @Body() account: BankAccount, @Res() res: Response) {
    const numericId = Number(id);
    if (isNaN(numericId) || numericId !== account.id) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Account ID mismatch' });
    }
  
    this.bankAccountService.updateAccount(account);
    return res.status(HttpStatus.NO_CONTENT).send(); 
  }  

  @Delete(':id')
  deleteAccount(@Param('id') id: string, @Res() res: Response) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Invalid account ID' });
    }
  
    this.bankAccountService.deleteAccount(numericId);
    return res.status(HttpStatus.NO_CONTENT).send(); 
  }   
}
