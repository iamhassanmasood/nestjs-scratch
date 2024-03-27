import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData(a: number) {
    this.powerService.supplyPower(12);
    return `${a * a} Disk Serivice`;
  }
}
