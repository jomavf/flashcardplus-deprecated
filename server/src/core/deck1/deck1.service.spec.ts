import { Test, TestingModule } from '@nestjs/testing';
import { Deck1Service } from './deck1.service';

describe('Deck1Service', () => {
  let service: Deck1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Deck1Service],
    }).compile();

    service = module.get<Deck1Service>(Deck1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
