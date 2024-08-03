// full_server/utils.js
const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentGroups = {};

    for (const line of lines.slice(1)) {
      if (line) {
        const [firstName, , , field] = line.split(',');

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstName);
      }
    }

    for (const field in studentGroups) {
      if (field) {
        studentGroups[field].sort((a, b) => a.localeCompare(b));
      }
    }

    return studentGroups;
  } catch (error) {
    console.error('Error reading or processing the database file:', error.message);
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = readDatabase;
