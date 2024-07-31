const fs = require('fs').promises; // Use promises version of fs module

/**
 * Reads a database from a CSV file.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<Object>} A promise that resolves with an object containing
 *        arrays of student first names per field.
 */
async function readDatabase(filePath) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentGroups = {};

    // Skip header line and process each line
    for (const line of lines.slice(1)) {
      if (line) {
        const [firstName, , , field] = line.split(','); // Extract firstName and field

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstName);
      }
    }

    // Sort students in each field
    for (const field in studentGroups) {
      studentGroups[field].sort((a, b) => a.localeCompare(b));
    }

    return studentGroups;
  } catch (error) {
    console.error('Error reading or processing the database file:', error.message); // Log detailed error
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = readDatabase;

