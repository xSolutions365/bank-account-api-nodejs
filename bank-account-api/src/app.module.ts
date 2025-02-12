import { Module, OnModuleInit } from '@nestjs/common';
import { BankAccount } from './bank-account/bank-account.model';
import { BankAccountService } from './bank-account/bank-account.service';
import { BankAccountController } from './bank-account/bank-account.controller';

@Module({
  imports: [],
  controllers: [BankAccountController],
  providers: [BankAccountService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly bankAccountService: BankAccountService) {}

  onModuleInit() {
    this.populateAccountData();
  }

  private populateAccountData(): void {
    const names = [
      "John Smith", "Maria Garcia", "Mohammed Khan", "Sophie Dubois",
      "Liam Johnson", "Emma Martinez", "Noah Lee", "Olivia Kim"
    ];
    const accounts: BankAccount[] = [];

    for (let i = 1; i <= 20; i++) {
      const account = new BankAccount(
        i + 1,
        `Account ${i}`,
        names[i % names.length],
        Math.floor(Math.random() * 10000) + 10
      );
      accounts.push(account);
    }

    accounts.forEach(fromAcc => {
      accounts.forEach(toAcc => {
        if (fromAcc !== toAcc) {
          try {
            let transferAmt = Math.round(Math.random() * fromAcc.balance);
            if (transferAmt > fromAcc.balance) return;

            fromAcc.withdraw(transferAmt, "Debit");
            toAcc.deposit(transferAmt, "Credit");

            console.log(`Transfer: $${transferAmt} from ${fromAcc.accountNumber} (${fromAcc.accountHolderName}) to ${toAcc.accountNumber} (${toAcc.accountHolderName})`);
          } catch (error) {
            console.log("Transfer failed:", error.message);
          }
        }
      });
    });

    this.bankAccountService.initializeAccounts(accounts);
  }
}
