import { Component, useState } from "react";

// class ExHelloWorld extends Component {
//   state = {
//     name: "Romain",
//   };
//   handleChange = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   }
//   render() {
//     const { name } = this.state;

//     return (
//       <div className="ExHelloWorld">
//         <label>Name:</label>
//         <input type="text" placeholder="Enter a name here" value={name} onChange={this.handleChange} />
//         <hr />
//         <h1>Hello {name}!</h1>
//       </div>
//     );
//   }
// }

// Sous forme de classe le state est organisé sous forme d'objet :
// {
//   name: "Romain",
//   email: 'romain.bohdanowicz@formation.tech'
// }

// Sous forme de fonction avec les hooks, le state est organisé sous forme de tableau :
// [
//   "Romain",
//   'romain.bohdanowicz@formation.tech'
// ]

// ATTENTION A NE PAS CHANGER L'ORDRE DES APPELS (pas de boucle, pas de if, y compris avant)

function ExHelloWorld() {
  const [name, setName] = useState("Romain");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="ExHelloWorld">
      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter a name here"
        value={name}
        onChange={handleChange}
      />
      <hr />
      <h1>Hello {name}!</h1>
    </div>
  );
}

export default ExHelloWorld;

/*
Exercice 1 :
En vous inspirant de Counter
Créer une propriété name sur le state du composant (avec une valeur par défaut)
L'afficher dans le champ et après Hello
Ecouter onChange sur le champ et mettre à jour le state
*/
