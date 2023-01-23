import { Controller, Get, Logger } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly logger: Logger,
    private readonly appService: AppService
  ) {}

  @Get()
  getData() {
    this.logger.log('getData was called');

    return this.appService.getData();
  }
}
