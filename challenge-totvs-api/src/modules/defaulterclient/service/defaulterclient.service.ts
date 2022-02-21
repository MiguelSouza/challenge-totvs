import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DefaulterClient, DefaulterClientDocument } from 'src/schemas/defaulterclient.schema';

@Injectable()
export class DefaulterClientService {
  constructor(@InjectModel(DefaulterClient.name) private defaulterClientModel: Model<DefaulterClientDocument>) { }

  async findAll (): Promise<DefaulterClient[]> {
    return this.defaulterClientModel.find().exec();
  }
}
