import { Controller, Get, Param } from '@nestjs/common';
import { PrimeService } from './prime.service';

@Controller('api/prime')
export class PrimeController {
  constructor(private readonly primeService: PrimeService) {}

  @Get(':number')
  isPrime(@Param('number') number: string): boolean {
    return this.primeService.isPrime(parseInt(number, 10));
  }
}
