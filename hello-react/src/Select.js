import "./Select.css";
import { Component } from "react";

class Select extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }
  handleSelectedClick = () => {
    const { menuOpen } = this.state;
    this.setState({
      menuOpen: !menuOpen,
    });
  };
  handleItemClick = (el) => {
    const { onSelected } = this.props;
    onSelected(el);
  };
  render() {
    const { selected, items, onSelected } = this.props;
    const { menuOpen } = this.state;

    // [
    //   'Rouge' -> (el) => <div>{el}</div>  -> <div>Rouge</div>
    //   'Vert' -> (el) => <div>{el}</div>  -> <div>Vert</div>
    //   'Bleu' -> (el) => <div>{el}</div>  -> <div>Bleu</div>
    // ]

    // const itemsEls = [];
    // for (const item of items) {
    //   itemsEls.push(<div>{item}</div>)
    // }
    const itemsEls = items.map((el) => (
      <div className="item" key={el} onClick={() => this.handleItemClick(el)}>
        {el}
      </div>
    ));

    return (
      <div className="Select">
        <div className="selected" onClick={this.handleSelectedClick}>
          {selected}
        </div>
        {menuOpen && <div className="menu">{itemsEls}</div>}
      </div>
    );
  }
}

export default Select;
