import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequestDTO } from './user.dto';
import { HttpExceptionFilter } from './customExeption';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  test(@Body() createCatDto: CreateUserRequestDTO): string {
    return this.appService.testTest(createCatDto);
  }
}
