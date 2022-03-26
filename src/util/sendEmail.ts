// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import * as sgMail from '@sendgrid/mail';
// const sgMail = require('@sendgrid/mail');
export const sendEmail = async (email: string, link: string) => {
  sgMail.setApiKey(process.env.SECRET_API_KEY);
  const msg = {
    to: email, // Change to your recipient
    from: 'anhbuiquocit@gmail.com', // Change to your verified sender
    subject: 'Confirm you account',
    text: 'Clic on it to verify your account',
    html: `<b>Confirm your account</b> <a href=${link}>Click on it</a>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
};
