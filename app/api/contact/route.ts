import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const contactsPath = path.join(process.cwd(), 'contacts.json');
    
    let contacts = [];
    if (fs.existsSync(contactsPath)) {
      contacts = JSON.parse(fs.readFileSync(contactsPath, 'utf-8'));
    }
    
    contacts.push(data);
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
  }
}