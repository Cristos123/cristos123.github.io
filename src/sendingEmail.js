const nodemailer = require("nodemailer");



const sendMailWithNodemailer = (
  
  recievers,
  subject,
  content,
) => {
  const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "208b0525e329a1",
        pass: "8de78b724dc68f"
      }
    
  });

  let messages = {
    from: 'cristosnodemailer@gmail.com',
    to: recievers,
    subject: subject,
    html: content,
  };

  transport.sendMail(messages, (err, info) => {
    if (err) {
      return console.log("err", err);
    } else {
      console.log("email sent: ", info.response);
    }
  });
 };
// const sendMailWithNodemailer = (
  
//   recievers,
//   subject,
//   content,
// ) => {
//   const transporter = nodemailer.createTransport({
//     hostname: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "cristosnodemailer@gmail.com",
//       password: "osuncristos123",
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   let mailOptions = {
//     from: 'cristosnodemailer@gmail.com',
//     to: recievers,
//     subject: subject,
//     text: content,
//   };

//   transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       return console.log("err", err);
//     } else {
//       console.log("email sent: ", info.response);
//     }
//   });
// };

module.exports = sendMailWithNodemailer;
