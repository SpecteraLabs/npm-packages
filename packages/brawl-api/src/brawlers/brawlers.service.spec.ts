import { Test, TestingModule } from '@nestjs/testing';
import { BrawlersService } from './brawlers.service';

describe('BrawlersService', () => {
  let service: BrawlersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrawlersService],
    }).compile();

    service = module.get<BrawlersService>(BrawlersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
