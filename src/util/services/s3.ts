import AWS, { S3 } from 'aws-sdk';
import 'dotenv/config';
const s3 = new S3({
  accessKeyId: process.env.AWS_USER_ACCESSKEY,
  secretAccessKey: process.env.AWS_USER_SECRETKEY,
  region: process.env.AWS_REGION,
  signatureVersion: 'v4',
});
// s3.cors
export const uploadViewableImageToS3 = async (file) => {
  const { createReadStream, filename, mimetype } = await file;
  const stream = createReadStream();
  const bucketName = process.env.BUCKET_NAME;

  const baseFilePath = `${Date.now()}_${filename}`;

  const params = {
    ACL: 'public-read',
    Bucket: bucketName,
    ContentType: mimetype,
    Key: baseFilePath,
    Body: stream,
  };

  const options = {
    partSize: 10 * 1024 * 1024,
    queueSize: 10,
  };

  const data = await s3
    .upload(params, options, (err) => {
      if (err) {
        throw new Error(err.message);
      }
    })
    .promise();

  const { Key } = data;

  return Key;
};

export const downloadFromS3 = (key) =>
  s3.getSignedUrl('getObject', {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key,
    Expires: 86400,
  });

export function createPresigned(fileName: string): Promise<any> {
  const bucketName = process.env.AWS_S3_BUCKET_NAME;

  const params: S3.PresignedPost.Params = {
    Expires: 1200,
    Bucket: bucketName,
    Conditions: [{ bucket: bucketName }],
    Fields: { key: fileName },
  };

  // return new Promise((resolve, reject) => {
  //   s3.createPresignedPost(params, (err, data) => {
  //     if (err) {
  //       reject(err);
  //     }
  //     resolve(data);
  //     console.log('dataaa s333: ', data);
  //   });
  // });

  return new Promise((resolver, reject) => {
    s3.getSignedUrl(
      'putObject',
      {
        Key: fileName.toString(),
        Bucket: bucketName,
        Expires: 1200,
        // ACL: 'public-read',
      },
      (err, url) => {
        if (err) {
          reject(err);
        }
        resolver(url);
        console.log('url result: ', url);
      },
    );
  });
}
