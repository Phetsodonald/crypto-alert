const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});



const sendEmail = (to, subject, text)=>{
    return transporter.sendMail({
        from: `crypto Alerts  <${process.env.EMAIL_USER}`,
        to,
        subject,
        text,
    });
};


module.exports = sendEmail;