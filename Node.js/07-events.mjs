import EventEmitter from "events";

class UserService extends EventEmitter {

  register(user) {
    // write user in DB

    // send email to user / notification / SMS
    this.emit('user:registered', user)
  }

}

const userServiceProjectA = new UserService();
const userServiceProjectB = new UserService();

userServiceProjectA.on('user:registered', (user) => {
  console.log(`sending SMS to ${user.username}`);
});

userServiceProjectA.once('user:registered', (user) => {
  console.log(`sending SMS to ${user.username}`);
});

const callback = (user) => {
  console.log(`sending email to ${user.username}`);
};

userServiceProjectB.on('user:registered', callback);

// pour arrêter d'écouter :
userServiceProjectB.off('user:registered', callback);

userServiceProjectA.register({username: 'toto'});
userServiceProjectB.register({username: 'toto'});
userServiceProjectA.register({username: 'titi'});
