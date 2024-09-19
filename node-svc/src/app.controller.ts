import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('get Hello')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiQuery({ name: 'name', type: String, required: false })
  @Get('hello')
  getHello(@Query() data?: { name?: string }): string {
    return this.appService.getHello(data.name);
  }
}
