// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');
const fetch = require('node-fetch');
const { nextTick } = require('process');

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const app = express();
app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
      useDefaults: false,
      directives: {
          defaultSrc: ["'self'"],
          scriptSrcElem: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://www.google.com/recaptcha/', 'https://www.gstatic.com/recaptcha/', 'https://www.google.com/recaptcha/api.js'],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://www.google.com/recaptcha/', 'https://www.gstatic.com/recaptcha/', 'https://www.google.com/recaptcha/api.js'],
          styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
          frameSrc : ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://www.google.com/recaptcha/', 'https://recaptcha.google.com/recaptcha/'],
          defaultSrc: ["'self'"],
          imgSrc: ["'self'", 'http://www.w3.org/2000/svg', 'data: *'],
          fontSrc:['fonts.gstatic.com'],
          objectSrc:["'none'"]
      }
  })
)
app.use(compression());
app.use(cors());
app.use(bodyParser.json());

const STATIC_DIR = "./dist";
app.use(express.static(STATIC_DIR));

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.PORT || 3002;


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.email_username, // gmail username
      pass: process.env.email_password, // gmail password
    },
  });

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true ,
    csp:helmet.contentSecurityPolicy});
});

app.post('/api/v1/sendemail', async (req, res) => {
      console.log(req.body);
      const secret = process.env.recaptcha_key;
      
      const {ratingdummy,rating,email,message} = req.body;
      let token = req.body['g-recaptcha-response'];
      console.log(token);

      if(token === undefined || token === '' || token === null){
        return res.json({success:false, "message":"Message not sent. Reason: Please use the Recaptcha functionality."});
      }

      const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
                    {
                        method:"POST",
                    }
            );
         const data = await response.json();
        
        console.log('recaptcha said: ' + data);
        console.log('success: ' + data.success);
        console.log('challenge_ts: ' + data['challenge_ts']);
        console.log('hostname: ' + data.hostname);
        console.log('error-codes: ' + data['error-codes']);

        if(data.success !== true){
            return res.json({success:false, "message":`Message not sent. Reason: ${data['error-codes']}.`});
        }

      const mailData = {
        from: email, // sender address
        to: "dimitriskarn94@gmail.com", // list of receivers
        subject: `New message from ${email}`, // Subject line
        text: `Hello Dimitris.
        
               ${email} just left a message:
               ${!!rating ? 'Rating: ' + rating : ''}
               Message: ${message}

               The dkarnApp.`
      };
      transporter.sendMail(mailData,(err,info)=>{
        if(err){
            return console.log(err)
        }
        else{
            console.log(info);
            res.json({success:true, "message":"Message sent"})
        }
    })
});

app.listen(PORT, () =>
    console.log(
        `???  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
