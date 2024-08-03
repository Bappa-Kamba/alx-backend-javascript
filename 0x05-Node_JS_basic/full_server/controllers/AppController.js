class AppController {
  /**
   * Handles requests to the homepage.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
