/*
<div class="Hello">
  Hello <span id="name">Romain</span>
</div>
*/

// import React from "react";

// Sans React avec l'API DOM
// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';

//   const spanEl = document.createElement('span');
//   spanEl.id = 'name';
//   spanEl.append('Romain');

//   divEl.append('Hello ', spanEl);

//   return divEl;
// }

// React sans JSX
// function Hello() {
// let trainerEl;

// if (isTrainer) {
//   trainerEl = React.createElement("span", {}, "Im a trainer");
// }

//   return React.createElement(
//     'div',
//     { className: 'Hello' },
//     'Hello ',
//     React.createElement(
//       'span',
//       { id: 'name' },
//       'Romain'
//     )
//     , trainerEl
//   );
// }

// React avec JSX
// function Hello(props) {
//   const name = props.name ?? 'Romain';
//   return (
//     <div className="Hello">
//       Hello <span id="name">{name}</span>
//     </div>
//   );
// }

// En destructurant props
// function Hello({ name = "Romain", age = 0, isTrainer = false }) {
//   let trainerEl;

//   if (isTrainer) {
//     trainerEl = <span>I'm a trainer</span>;
//   }

//   return (
//     <div className="Hello">
//       Hello <span id="name">{name}</span>
//       {' '}
//       {trainerEl}
//     </div>
//   );
// }

// function Hello({ name = "Romain", age = 0, isTrainer = false }) {
//   return (
//     <div className="Hello">
//       Hello <span id="name">{name}</span>
//       {' '}
//       {isTrainer && <span>I'm a trainer</span>}
//     </div>
//   );
// }

function Hello({ name = "Romain", age = 0, isTrainer = false }) {
  return (
    <div className="Hello">
      Hello <span id="name">{name}</span>
      {' '}
      {isTrainer ? <span>I'm a trainer</span> : <span>I'm not a trainer</span>}
    </div>
  );
}

export default Hello;
