import { Date, Document } from 'mongoose';
export declare type DefaulterClientDocument = DefaulterClient & Document;
export declare class DefaulterClient {
    name: string;
    value: number;
    since: Date;
}
export declare const DefaulterClientSchema: import("mongoose").Schema<Document<DefaulterClient, any, any>, import("mongoose").Model<Document<DefaulterClient, any, any>, any, any, any>, any, any>;
