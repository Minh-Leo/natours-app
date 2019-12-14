const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1. Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
    // Need to activate in Gmail 'less secure app' option if use Gmail
  });

  // 2. Define email options
  const mailOptions = {
    from: 'Minh Bui <hello@minh.io>',
    to: options.email,
    subject: options.subject,
    text: options.message
    //   html:
  };

  // 3. Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
