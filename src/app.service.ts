import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  testTest(createCatDto): string {
    return 'Hello !';
  }
}
