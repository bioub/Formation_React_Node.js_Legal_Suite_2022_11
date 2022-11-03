/*
<div class="Hello">
  Hello <span id="name">Romain</span>
</div>
*/

import React from "react";

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
//   return React.createElement(
//     'div',
//     { className: 'Hello' },
//     'Hello ',
//     React.createElement(
//       'span',
//       { id: 'name' },
//       'Romain'
//     )
//   );
// }

// React avec JSX
function Hello() {
  return (
    <div className="Hello">
      Hello <span id="name">Romain</span>
    </div>
  );
}

export default Hello;
