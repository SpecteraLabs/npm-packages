import { Test, TestingModule } from '@nestjs/testing';
import { BrawlersController } from './brawlers.controller';

describe('BrawlersController', () => {
  let controller: BrawlersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrawlersController],
    }).compile();

    controller = module.get<BrawlersController>(BrawlersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
