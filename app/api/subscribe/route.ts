import { google } from 'googleapis';

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email: string };

  const auth = new google.auth.JWT({
    email: process.env.SERVICE_ACCOUNT_EMAIL,
    key:
      process.env.SERVICE_ACCOUNT_PRIVATE_KEY?.split(String.raw`\n`).join(
        '\n',
      ) || '',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheet = google.sheets('v4');
  await sheet.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    auth,
    range: 'Subscription',
    valueInputOption: 'RAW',
    requestBody: {
      values: [
        [
          email,
          `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
        ],
      ],
    },
  });

  return new Response('ok');
}
