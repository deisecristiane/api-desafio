/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('Deve criar um quadrinho', async () => {
    const response = await request(app.getHttpServer())
      .post('/comics')
      .send({ name: "Flash I", description: "Versão Antiga", price: 50, codComic: "comic63", rarity: true, quantity: 45, likes: 2 })

    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Flash I')
    expect(response.body.description).toBe('Versão Antiga')
    expect(response.body.price).toBe(50)
    expect(response.body.codComic).toBe('comic63')
    expect(response.body.rarity).toBe(true)
    expect(response.body.quantity).toBe(45)
    expect(response.body.likes).toBe(2)


  })
});
