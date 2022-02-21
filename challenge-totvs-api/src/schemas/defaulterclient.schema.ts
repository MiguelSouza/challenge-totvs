import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type DefaulterClientDocument = DefaulterClient & Document;

@Schema()
export class DefaulterClient {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    value: number;

    @Prop({ required: true, type: Date })
    since: Date;
}

export const DefaulterClientSchema = SchemaFactory.createForClass(DefaulterClient);