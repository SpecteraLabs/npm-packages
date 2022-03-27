import { Controller, Get, Param, Req, Res, Version } from '@nestjs/common';
import { fetch } from 'undici';
import { FastifyReply, FastifyRequest } from 'fastify';
import { BrawlerInterface } from 'src/typings';

@Controller('brawlers')
export class BrawlersController {
  @Version('1')
  @Get()
  async getBrawlers(@Req() req: FastifyRequest, @Res() response: FastifyReply) {
    if (!req.headers['authorization']) {
      req.headers['authorization'] = 'Bearer';
    }
    const res = await fetch('https://api.brawlstars.com/v1/brawlers', {
      headers: {
        Authorization: req.headers['authorization'],
      },
    });
    if (!res.ok)
      return await response
        .status(res.status)
        .headers(res.headers)
        .send(await res.json());
    const { items } = (await res.json()) as {
      items: BrawlerInterface[];
      paging: unknown;
    };
    return response.send(items);
  }

  @Version('1')
  @Get(':name')
  async getBrawler(
    @Req() req: FastifyRequest,
    @Res() response: FastifyReply,
    @Param('name') name: string,
  ) {
    if (!req.headers['authorization']) {
      req.headers['authorization'] = 'Bearer';
    }
    const res = await fetch('https://api.brawlstars.com/v1/brawlers', {
      headers: {
        Authorization: req.headers['authorization'],
      },
    });
    if (!res.ok)
      return await response
        .status(res.status)
        .headers(res.headers)
        .send(await res.json());
    const { items } = (await res.json()) as {
      items: BrawlerInterface[];
      paging: unknown;
    };
    const brawler = items.find((item) => item.name === name.toUpperCase());
    return response.send(brawler);
  }
}
