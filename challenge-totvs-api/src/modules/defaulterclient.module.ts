import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DefaulterClient, DefaulterClientSchema } from 'src/schemas/defaulterclient.schema';
import { DefaulterClientController } from './defaulterclient/controller/defaulterclient.controller';
import { DefaulterClientService } from './defaulterclient/service/defaulterclient.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: DefaulterClient.name, schema: DefaulterClientSchema }])],
    controllers: [DefaulterClientController],
    providers: [DefaulterClientService],
})
export class DefaulterClientModule { }
