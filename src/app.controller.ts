import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getAppRoute() {
    return "Test App";
  }
}
