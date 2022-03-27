import { HttpCode, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @HttpCode(404)
  getHello() {
    return 'Go back';
  }
}
