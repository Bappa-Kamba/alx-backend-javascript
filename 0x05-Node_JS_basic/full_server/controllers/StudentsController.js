const path = require('path');
const readDatabase = require('../utils'); // Ensure utils.js is correctly exporting readDatabase

class StudentsController {
  /**
   * Handles requests to get all students.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudents(req, res) {
    try {
      // Resolve path to database.csv with fallback
      const defaultPath = path.resolve(__dirname, '../../database.csv');
      const finalPath = process.env.DB_PATH || defaultPath;

      // Read and process database
      const data = await readDatabase(finalPath);
      const responseLines = ['This is the list of our students'];

      // Sort fields alphabetically and prepare response
      Object.keys(data)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          const students = data[field];
          responseLines.push(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
          );
        });

      res.status(200).send(responseLines.join('\n'));
    } catch (error) {
      console.error('Error in getAllStudents:', error.message); // Log error for debugging
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Handles requests to get students by major.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      // Resolve path to database.csv with fallback
      const defaultPath = path.resolve(__dirname, '../../database.csv');
      const finalPath = process.env.DB_PATH || defaultPath;

      // Read and process database
      const data = await readDatabase(finalPath);
      const students = data[major] || []; // Ensure it's an array

      // Send the response
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      console.error('Error in getAllStudentsByMajor:', error.message); // Log error for debugging
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
