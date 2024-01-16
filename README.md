# AWS S3 

An Implementation of AWS s3-service where user can create bucket, put files, delete files, get bucket list.

## Features
  - Create File and add to Bucket (/object/upload)
  - Get File Content (/object/fileId)
  - Delete File (/object/fileId)
  - Get Bucket List (/bucket)
  - Get List of Files in Bucket (/bucket/id)

## Procedures to Execute
  - Create a docker container of postgres
  - Use credentials to create docker-compose.yml
  - Set up database using same credentials
  - Install the dependencies
  - npm run start:dev to finally execute application

