import { Test, TestingModule } from '@nestjs/testing';
import { ShowingResolver } from './showing.resolver';

describe('ShowingResolver', () => {
  let resolver: ShowingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowingResolver],
    }).compile();

    resolver = module.get<ShowingResolver>(ShowingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
