import { PrimeService } from '../src/prime/prime.service';

describe('PrimeService', () => {
  let service: PrimeService;

  beforeEach(() => {
    service = new PrimeService();
  });

  it('should return true for prime numbers', () => {
    expect(service.isPrime(3)).toBe(true);
  });

  it('should return false for non-prime numbers', () => {
    expect(service.isPrime(4)).toBe(false);
  });
});
