import { Injectable } from '@nestjs/common';
import { createPresigned, downloadFromS3 } from 'src/util/services/s3';
@Injectable()
export class AwsServiceService {
  async createPresigned(fileName: string) {
    const result = await createPresigned(fileName);
    return result;
  }
  async getUrlOfImage(key) {
    console.log('downloadFromS3(key): ', downloadFromS3(key));
    return await downloadFromS3(key);
  }
}
