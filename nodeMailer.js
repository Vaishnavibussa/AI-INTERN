const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'your-email@gmail.com',
        clientId: 'your-client-id',
        clientSecret: 'your-client-secret',
        refreshToken: 'your-refresh-token',
    },
});

async function sendEmail(to, subject, body) {
    await transporter.sendMail({
        from: 'your-email@gmail.com',
        to,
        subject,
        html: body,
    });
}
