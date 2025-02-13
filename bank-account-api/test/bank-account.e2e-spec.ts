import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('BankAccount API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  /// <summary>
  /// Scenario 1: Retrieve all bank accounts
  /// Given the bank account API is running
  /// When I request all bank accounts
  /// Then I should receive a list of all accounts with a 200 OK response
  /// </summary>
  it('/api/BankAccount (GET) should return all accounts', async () => {
    return request(app.getHttpServer())
      .get('/api/BankAccount')
      .expect(200)
      .expect(res => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });

  /// <summary>
  /// Scenario 2: Retrieve a bank account by ID
  /// Given the bank account API is running
  /// When I request a bank account by ID
  /// Then I should receive the account details with a 200 OK response
  /// </summary>
  it('/api/BankAccount/:id (GET) should return a specific account', async () => {
    return request(app.getHttpServer())
      .get('/api/BankAccount/1')
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveProperty('accountNumber');
      });
  });

  /// <summary>
  /// Scenario 3: Create a new bank account
  /// Given the bank account API is running
  /// When I create a new bank account
  /// Then I should receive a 201 Created response with the created account details
  /// </summary>
  it('/api/BankAccount (POST) should create a new account', async () => {
    return request(app.getHttpServer())
      .post('/api/BankAccount')
      .send({ id: 3, accountNumber: '789', accountHolderName: 'Alice Doe', balance: 3000 })
      .expect(201);
  });

  /// <summary>
  /// Scenario 4: Update an existing bank account
  /// Given the bank account API is running
  /// When I update an existing bank account
  /// Then I should receive a 204 No Content response
  /// </summary>
  it('/api/BankAccount/:id (PUT) should update an account', async () => {
    return request(app.getHttpServer())
      .put('/api/BankAccount/1')
      .send({ id: 1, accountNumber: '123', accountHolderName: 'John Doe Updated', balance: 1500 })
      .expect(204);
  });

  /// <summary>
  /// Scenario 5: Delete an existing bank account
  /// Given the bank account API is running
  /// When I delete an existing bank account
  /// Then I should receive a 204 No Content response
  /// </summary>
  it('/api/BankAccount/:id (DELETE) should delete an account', async () => {
    return request(app.getHttpServer())
      .delete('/api/BankAccount/1')
      .expect(204);
  });

  /// <summary>
  /// Scenario 6: Transfer funds between two bank accounts
  /// Given two bank accounts exist in the system
  /// When I transfer a valid amount from one account to another
  /// Then the source account balance should decrease, the destination account balance should increase, and I should receive a 200 OK response
  /// </summary>
});
