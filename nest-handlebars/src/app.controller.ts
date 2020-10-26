import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index2')
  ro2ot() {
    return { message: this.appService.getTestMessage() };
  }
}
