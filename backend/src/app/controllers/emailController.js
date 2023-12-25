const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MP,
    },
  });
  const info = await transporter.sendMail({
    from: {
        name: 'Phuoc Nguyen',
        address: process.env.MAIL_SENDER,
    }, 
    to: data.to,
    subject: data.subject, 
    text: data.text, 
    html: data.html,
    attachments: data.attachments,
  });
  console.log("Recipient email:", data.to);
  console.log("Message sent: %s", info.messageId);
});

module.exports = sendEmail;
