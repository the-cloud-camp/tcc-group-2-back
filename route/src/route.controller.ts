import { Controller, Get } from '@nestjs/common';
import { StationService } from './station/services/station.service';

@Controller()
export class RouteController {
  constructor(private readonly appService: StationService) {}

  @Get()
  getHello(): string {
    return this.appService.findAll();
  }
}
