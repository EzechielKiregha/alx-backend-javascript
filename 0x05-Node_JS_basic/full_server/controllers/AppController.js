class AppController {
  static getHomepage(req, res) {
    const responseMessage = 'Hello Holberton School!';

    res.send(responseMessage);
  }
}

module.exports = AppController;
