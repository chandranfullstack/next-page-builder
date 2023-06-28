// pages/api/s3files.js

import {s3} from "./s3config"

export default function handler(req, res) {
  const { method, body } = req;
  console.log(method,body,"method and body")

  switch (method) {
    case 'POST':
      createFile(body);
      res.status(201).end();
      break;
    case 'PUT':
      updateFile(body);
      res.status(200).end();
      break;
    case 'DELETE':
      deleteFile(body);
      res.status(200).end();
      break;
    default:
    //   res.setHeader('Allow', ['POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

function createFile({ fileName, fileData }) {
  const params = {
    Bucket: 'techacademynew',
    Key: fileName,
    Body: fileData,
  };

  s3.upload(params, (err, data) => {
    console.log(params,"params")
    if (err) {
      console.error(err);
      console.log(err,"err")
    } else {
      console.log(`File uploaded successfully. File URL: ${data.Location}`);
      console.log("success",data.Location,data)
    }
  });
}

function updateFile({ fileName, fileData }) {
  const params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: fileName,
    Body: fileData,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File updated successfully. File URL: ${data.Location}`);
    }
  });
}

function deleteFile({ fileName }) {
  const params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: fileName,
  };

  s3.deleteObject(params, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File deleted successfully.');
    }
  });
}
