// Bind in constructor
// class Contact {
//   constructor() {
//     this.state = {
//       name: 'Romain'
//     };
//     this.hello = this.hello.bind(this);
//   }
//   hello() {
//     console.log(this.state.name);
//   }
//   render() {
//     setTimeout(this.hello, 1000);
//   }
// }

// Class properties (ES2015)
// class Contact {
//   state = {
//     name: 'Romain'
//   };
//   hello = () => {
//     console.log(this.state.name);
//   }
//   render() {
//     setTimeout(this.hello, 1000);
//   }
// }


// Arrow function in render
class Contact {
  state = {
    name: 'Romain'
  };
  hello() {
    console.log(this.state.name);
  }
  render() {
    setTimeout(() => this.hello(), 1000);
  }
}

const romain = new Contact();
romain.render();
