import { Component } from "react";

class ExHelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      name: "Romain",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    const { name } = this.state;

    return (
      <div className="ExHelloWorld">
        <label>Name:</label>
        <input type="text" placeholder="Enter a name here" value={name} onChange={this.handleChange} />
        <hr />
        <h1>Hello {name}!</h1>
      </div>
    );
  }
}

export default ExHelloWorld;

/*
Exercice 1 :
En vous inspirant de Counter
Créer une propriété name sur le state du composant (avec une valeur par défaut)
L'afficher dans le champ et après Hello
Ecouter onChange sur le champ et mettre à jour le state
*/
