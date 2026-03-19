import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request) {
  try {
    const data = await request.formData();
    const contact = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
      timestamp: new Date().toISOString()
    };
    
    const filePath = join(process.cwd(), 'contacts.json');
    let contacts = [];
    try {
      const existing = await readFile(filePath, 'utf-8');
      contacts = JSON.parse(existing);
    } catch (e) {}
    
    contacts.push(contact);
    await writeFile(filePath, JSON.stringify(contacts, null, 2));
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to save contact' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}