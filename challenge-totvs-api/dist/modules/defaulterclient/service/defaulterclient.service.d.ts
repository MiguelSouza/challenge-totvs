import { Model } from 'mongoose';
import { DefaulterClient, DefaulterClientDocument } from 'src/schemas/defaulterclient.schema';
export declare class DefaulterClientService {
    private defaulterClientModel;
    constructor(defaulterClientModel: Model<DefaulterClientDocument>);
    findAll(): Promise<DefaulterClient[]>;
}
