// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, BASE_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'avralgroup@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

const sendEmail = async (data) => {
  const mail = { ...data, from: BASE_EMAIL };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;
