import { Component } from "react";

class ExMultiStateButton extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: props.items[0],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { selected } = this.state;
    const { items } = this.props;

    const index = items.indexOf(selected);
    this.setState({
      selected: items[(index + 1) % items.length],
    });
  }
  render() {
    const { selected } = this.state;
    // les props sont accessibles via this.props
    return (
      <button className="ExMultiStateButton" onClick={this.handleClick}>
        {selected}
      </button>
    );
  }
}

export default ExMultiStateButton;

/*
Exercice 2 :
En vous inspirant de Counter
Au départ afficher le premier élément du tableau reçu en props
dans le bouton
A chaque clic, afficher le prochain élément du tableau (dans le bouton)
Si on arrive au dernier élément, afficher le premier
*/
