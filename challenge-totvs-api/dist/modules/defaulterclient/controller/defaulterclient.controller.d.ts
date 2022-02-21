import { DefaulterClient } from 'src/schemas/defaulterclient.schema';
import { DefaulterClientService } from '../service/defaulterclient.service';
export declare class DefaulterClientController {
    private readonly defaulterClientService;
    constructor(defaulterClientService: DefaulterClientService);
    getDefaulters(): Promise<DefaulterClient[]>;
}
