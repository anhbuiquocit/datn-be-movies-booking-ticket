import { Test, TestingModule } from '@nestjs/testing';
import { BookingItemService } from './booking-item.service';

describe('BookingItemService', () => {
  let service: BookingItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingItemService],
    }).compile();

    service = module.get<BookingItemService>(BookingItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
