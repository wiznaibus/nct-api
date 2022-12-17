module.exports = ({ env }) => ({
    "provider": "aws-s3",
    "providerOptions": {
      "accessKeyId": env('AWS_ACCESSKEYID'),
      "secretAccessKey": env('AWS_SECRETACCESSKEY'),
      "region": env('AWS_REGION'),
      "params": {
        "Bucket": env('AWS_BUCKET')
      }
    }
  });