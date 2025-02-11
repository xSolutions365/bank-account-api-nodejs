import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountController } from '../src/bank-account/bank-account.controller';
import { BankAccountService } from '../src/bank-account/bank-account.service';
import { BankAccount } from '../src/bank-account/bank-account.model';

describe('BankAccountController', () => {
  let controller: BankAccountController;
  let service: BankAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankAccountController],
      providers: [BankAccountService],
    }).compile();

    controller = module.get<BankAccountController>(BankAccountController);
    service = module.get<BankAccountService>(BankAccountService);
  });

  it('should return all bank accounts', () => {
    const accounts: BankAccount[] = [
      new BankAccount(1, '123', 'John Doe', 1000),
      new BankAccount(2, '456', 'Jane Doe', 2000)
    ];

    jest.spyOn(service, 'getAllAccounts').mockReturnValue(accounts);

    expect(controller.getAllAccounts()).toEqual(accounts);
  });

  it('should return a bank account by ID', () => {
    const account = new BankAccount(1, '123', 'John Doe', 1000);

    jest.spyOn(service, 'getAccountById').mockReturnValue(account);

    expect(controller.getAccountById('1').id).toEqual(account.id);
  });

  it('should create a new bank account', () => {
    const account = new BankAccount(3, '789', 'Alice Doe', 3000);

    jest.spyOn(service, 'createAccount').mockImplementation(() => {});

    expect(() => controller.createAccount(account)).not.toThrow();
  });

  it('should update an existing bank account', () => {
    const account = new BankAccount(1, '123', 'John Doe Updated', 1500);

    jest.spyOn(service, 'updateAccount').mockImplementation(() => {});

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn(), send: jest.fn() } as any;
    expect(() => controller.updateAccount('1', account, res)).not.toThrow();
  });

  it('should delete an existing bank account', () => {
    jest.spyOn(service, 'deleteAccount').mockImplementation(() => {});

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn(), send: jest.fn() } as any;
    expect(() => controller.deleteAccount('1', res)).not.toThrow();
  });
});
