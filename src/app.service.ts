import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [
      { id: 1, title: 'First develeoper' },
      { id: 2, title: 'First develeoper' },
    ];
  }
}
