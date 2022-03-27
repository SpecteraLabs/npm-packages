import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrawlersController } from './brawlers/brawlers.controller';

@Module({
  controllers: [AppController, BrawlersController],
  providers: [AppService],
})
export class AppModule {}
