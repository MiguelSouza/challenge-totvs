import { Controller, Get } from '@nestjs/common';
import { DefaulterClient } from 'src/schemas/defaulterclient.schema';
import { DefaulterClientService } from '../service/defaulterclient.service';

@Controller()
export class DefaulterClientController {
  constructor(private readonly defaulterClientService: DefaulterClientService) { }

  @Get('/clientsdefaulter')
  async getDefaulters (): Promise<DefaulterClient[]> {
    return await this.defaulterClientService.findAll();
  }
}
