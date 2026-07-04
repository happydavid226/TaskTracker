import fs from 'fs/promises';

const readContents =  async () => {
    const data = await fs.readFile("users.txt", 'utf-8');
    console.log(`data is `, data);
}

readContents()