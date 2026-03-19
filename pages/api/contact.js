import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const contactsFile = path.join(process.cwd(), 'contacts.json');
  let contacts = [];
  
  if (fs.existsSync(contactsFile)) {
    contacts = JSON.parse(fs.readFileSync(contactsFile, 'utf8'));
  }
  
  contacts.push(req.body);
  fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
  
  res.status(200).json({ success: true });
}