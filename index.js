const express = require('express');
const { getSheetData } = require('./googleSheets');
const app = express();

const SPREADSHEET_ID = 'googleSheets.js'; 

app.get('/sheet-data', async (req, res) => {
    try {
        const data = await getSheetData(SPREADSHEET_ID, 'Sheet1!A1:C10');
        res.json(data); 
    } catch (error) {
        res.status(500).send('Error fetching Google Sheets data');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

const multer = require('multer');
const { parseCSV } = require('./csvHandler');

const upload = multer({ dest: 'uploads/' });

app.post('/upload-csv', upload.single('file'), async (req, res) => {
    try {
        const filePath = req.file.path;
        const data = await parseCSV(filePath);
        res.json(data); 
    } catch (error) {
        res.status(500).send('Error parsing CSV file');
    }
});
const template = 'Hello {Company Name}, welcome to {Location}.';
const customized = template
    .replace('{Company Name}', 'ABC Corp')
    .replace('{Location}', 'New York');
console.log(customized);
const schedule = require('node-schedule');

schedule.scheduleJob('*/5 * * * *', () => {
    console.log('Sending scheduled emails...');
});
app.get('/analytics', async (req, res) => {
    const data = await getEmailStats();
    res.json(data);
});
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('your-sendgrid-api-key');

const msg = {
    to: 'recipient@example.com',
    from: 'your-email@example.com',
    subject: 'Hello from SendGrid',
    text: 'This is a test email!',
};

sgMail.send(msg);


