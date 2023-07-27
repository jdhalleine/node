
//import {myModule} from './my-module.mjs';


import pkg  from "jsonwebtoken";

import { CognitoJwtVerifier } from "aws-jwt-verify";


console.log(process.platform); 

console.log('coucou 👍');



import express from'express';
const app = express();
import readFile from 'fs/promises';
//const readile = require('fs/promises');


app.get('/', async (request, response) => {

    response.send( await readFile.readFile('./home.html', 'utf8') );

    
    // Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
  userPoolId: "eu-central-1_OMvTre75X",
  tokenUse: "access",
  clientId: "4mgv6c1e6s4p4505lgjilsv8gm",
});


    try {
  const payload = await verifier.verify(
    "eyJraWQiOiJ5aTlvNDRLempNdGs3XC9GOXl6ZTM1akNFdDZBMGw0Um1TVEtcL2QzZ2RZM009IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI3NzNlZDU3My0yMTc2LTQwZmItOTQwMi1hMDFjZTEwYTBlZDAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9PTXZUcmU3NVgiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0bWd2NmMxZTZzNHA0NTA1bGdqaWxzdjhnbSIsIm9yaWdpbl9qdGkiOiIyZjY2YTE3Yi04MTZiLTQ4NzAtYmQxNi1lMmZmOTUyOTg3MDUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6InBob25lIG9wZW5pZCIsImF1dGhfdGltZSI6MTY5MDM1OTc1OSwiZXhwIjoxNjkwNDQ2MTU5LCJpYXQiOjE2OTAzNTk3NTksImp0aSI6ImI5MjQyYWZiLTJjNDYtNGZkOC1iZDE2LTViYmQyYjZjMjNmMyIsInVzZXJuYW1lIjoiR2lneWFCMkJQUF9hQjZFN25obUtsWT0ifQ.DqeaNyLVNE5Syfo5atGOuRULsd5Z5nXojOwhi8rsyZKWVBrE9shnMeYpVpEmSXDVNqQRvbq5oDE7nOEaqgNsV5qQ4JKrH69MxO1SRA7tYAElnD-mlTM3ysyeY9NJgjZZVbeamxkTbMMlwlHk2440lYSM-dneRotoeUTJfGVLAVVCPSpiB3tDXzhMyQyQmspiCmqBIZxnwu1saJs99FNT3oMhd-tKVt8BRH68uGb41H-aIeoKJhLxv5H1W0sp9xNMSbsL3QN5v3nIxF6NAh0wtGO1l74igK1hjaVPJbfVKI5aPYHpndNvHmDplcS9_kxQ4E46gSFmS3ow0owzZbPCzA" // the JWT as string
  );
  console.log("Token is valid. Payload:", payload);
} catch {
  console.log("Token not valid!");
}



});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))




