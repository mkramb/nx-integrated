import { Injectable } from '@nestjs/common';

import { MESSAGE } from '@nx-integrated/contracts';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: MESSAGE };
  }
}
