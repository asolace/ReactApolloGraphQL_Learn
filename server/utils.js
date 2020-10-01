const db = require('./db');

module.exports = {
  createStore: () => {
    const users = db.map(users => users);

    return { users };
  }
}