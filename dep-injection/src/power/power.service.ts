import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watt: number) {
    console.log(`No of watts require ${watt}`);
  }
}
