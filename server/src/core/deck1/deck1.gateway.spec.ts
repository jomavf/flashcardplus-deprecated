import { Test, TestingModule } from '@nestjs/testing';
import { Deck1Gateway } from './deck1.gateway';
import { Deck1Service } from './deck1.service';

describe('Deck1Gateway', () => {
  let gateway: Deck1Gateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Deck1Gateway, Deck1Service],
    }).compile();

    gateway = module.get<Deck1Gateway>(Deck1Gateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
