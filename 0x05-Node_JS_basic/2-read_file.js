const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the file content into lines and filter out empty lines
    const lines = data.trim().split('\n').filter(line => line);

    // Check if there's at least a header line
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Split the header line and data lines
    const headers = lines[0].split(',');
    const students = lines.slice(1);

    // Initialize a map to store counts and lists of students per field
    const fields = {};

    // Iterate over each student line
    for (const student of students) {
      const studentData = student.split(',');

      // Only process the line if it has the expected number of fields
      if (studentData.length === headers.length) {
        const firstname = studentData[0].trim();
        const field = studentData[studentData.length - 1].trim();

        // Initialize the field in the map if not present
        if (!fields[field]) {
          fields[field] = { count: 0, students: [] };
        }

        // Increment the count and add the student's name to the list
        fields[field].count += 1;
        fields[field].students.push(firstname);
      }
    }

    // Log the total number of students
    console.log(`Number of students: ${students.length}`);

    // Log the number of students in each field and their names
    for (const [field, { count, students }] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Log the error if the file can't be read
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;

