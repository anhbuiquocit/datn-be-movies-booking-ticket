import { Test, TestingModule } from '@nestjs/testing';
import { BookingItemResolver } from './booking-item.resolver';

describe('BookingItemResolver', () => {
  let resolver: BookingItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingItemResolver],
    }).compile();

    resolver = module.get<BookingItemResolver>(BookingItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
