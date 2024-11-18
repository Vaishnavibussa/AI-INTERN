const { google } = require('googleapis');

// Authenticate with Google API
const auth = new google.auth.GoogleAuth({
    keyFile: 'email-sender-app-442017-1bf6e1aedf65.json', // Path to your downloaded JSON file
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });


async function getSheetData(spreadsheetId, range) {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId, 
            range,
        }
        return response.data.values;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const spreadsheetId = 'https://1drv.ms/x/s!AmU7eAoWl4D6iqE2UwWnfJ0cQQ-pVw?e=QuMceI'; 
const range = 'Sheet1!A1:C100'; 

getSheetData(spreadsheetId, range).then((data) => {
    console.log('Data from Google Sheets:', data);
});
