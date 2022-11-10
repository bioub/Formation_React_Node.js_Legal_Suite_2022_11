const uuid = require('uuid');
const mongoose = require('mongoose');

const tokens = ['d4973653-9895-4123-a7dd-3e1387d0fbde'];

// const user = {
//   username: 'romain',
//   password: '123456',
// };

// /**
//  *
//  * @param {object} credentials
//  * @param {string} credentials.username
//  * @param {string} credentials.password
//  */
// function login(credentials) {
//   if (
//     credentials.username === user.username &&
//     credentials.password === user.password
//   ) {
//     const token = uuid.v4();
//     tokens.push(token);
//     return Promise.resolve(token);
//   }

//   return Promise.resolve(null);
// }

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is mandatory']
  },
  password: {
    type: String,
    required: [true, 'password is mandatory']
  },
  active: {
    type: Boolean,
    default: true,
  },
}, {
  statics: {
    async login(credentials) {
      const user = await this.findOne({username: credentials.username, password: credentials.password, active: true});

      if (!user) {
        return null;
      }

      const token = uuid.v4();
      tokens.push(token);
      return token;
    }
  }
});


const User = mongoose.model("User", schema);
User.tokens = tokens

module.exports = User;
