import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import type { AxiosRequestHeaders } from 'axios';
import { BrawlerInterface } from 'src/typings';

@Injectable()
export class BrawlersService {
  constructor(private httpService: HttpService) {}

  getBrawlers(headers: AxiosRequestHeaders) {
    const data = this.httpService.get<BrawlerInterface[]>(
      'http://api.brawlstars.com/v1/brawlers',
      {
        headers,
      },
    );
    return data;
  }
}
