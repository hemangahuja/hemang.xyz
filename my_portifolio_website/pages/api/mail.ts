
import type { NextApiRequest, NextApiResponse } from 'next'


type Respone = {
  statusCode: number,
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Respone>
) {
 return new Promise((resolve,reject)=>{
  const nodemailer = require('nodemailer');

  const transporter =  nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailData = {
    from : process.env.EMAIL,
    to : process.env.EMAIL,
    subject : `Message from ${req.body.name} from hemang.xyz`,
    text : req.body.message
  }

   transporter.sendMail(mailData, (err: any, info: any) => {
    if(err) {
      console.log(err);
      res.status(500).json({
        statusCode: 500,
        message: 'Internal Server Error'
      })
      resolve(false);
    } else {
      console.log(info);
      res.status(200).json({
        statusCode: 200,
        message: 'Message Sent'
      })
      resolve(true);
    }
  }
  )
 })
}
