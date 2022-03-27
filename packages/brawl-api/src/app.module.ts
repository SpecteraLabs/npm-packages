import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrawlersController } from './brawlers/brawlers.controller';
import { BrawlersService } from './brawlers/brawlers.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, BrawlersController],
  providers: [AppService, BrawlersService],
})
export class AppModule {}
