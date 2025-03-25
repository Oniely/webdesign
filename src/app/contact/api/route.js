import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, number, message } = body;

    if (!name || !email || !number || !message) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const filePath = path.join(process.cwd(), 'public', 'inquiry.txt');
    const data = `Name: ${name}\nEmail: ${email}\nPhone: ${number}\nInquiry: ${message}\n-------------------\n`;

    fs.appendFileSync(filePath, data, 'utf8');

    return new Response(JSON.stringify({ message: 'Inquiry sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error saving user data:', error);
    return new Response(JSON.stringify({ message: 'Failed to save data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}