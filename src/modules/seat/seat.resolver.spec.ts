import { Test, TestingModule } from '@nestjs/testing';
import { SeatResolver } from './seat.resolver';

describe('SeatResolver', () => {
  let resolver: SeatResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeatResolver],
    }).compile();

    resolver = module.get<SeatResolver>(SeatResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
