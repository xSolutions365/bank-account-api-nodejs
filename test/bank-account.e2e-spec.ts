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

  it('/api/BankAccount (GET) should return all accounts', async () => {
    return request(app.getHttpServer())
      .get('/api/BankAccount')
      .expect(200)
      .expect(res => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });

  it('/api/BankAccount/:id (GET) should return a specific account', async () => {
    return request(app.getHttpServer())
      .get('/api/BankAccount/1')
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveProperty('accountNumber');
      });
  });

  it('/api/BankAccount (POST) should create a new account', async () => {
    return request(app.getHttpServer())
      .post('/api/BankAccount')
      .send({ id: 3, accountNumber: '789', accountHolderName: 'Alice Doe', balance: 3000 })
      .expect(201);
  });

  it('/api/BankAccount/:id (PUT) should update an account', async () => {
    return request(app.getHttpServer())
      .put('/api/BankAccount/1')
      .send({ id: 1, accountNumber: '123', accountHolderName: 'John Doe Updated', balance: 1500 })
      .expect(204);
  });

  it('/api/BankAccount/:id (DELETE) should delete an account', async () => {
    return request(app.getHttpServer())
      .delete('/api/BankAccount/1')
      .expect(204);
  });
});
