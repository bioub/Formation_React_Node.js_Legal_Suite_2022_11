import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      count: 0,
    };

    // permet que this ne soit pas undefined dans handleClick :
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      step: Number(event.target.value),
    });
  }
  handleClick() {
    // console.log('click', this);
    const { step, count } = this.state;
    this.setState({
      count: count + step,
    });
  }
  render() {
    const { step, count } = this.state;
    return (
      <div className="Counter">
        <input type="text" name="step" value={step} onChange={this.handleChange} />
        <button onClick={this.handleClick}>
          {count}
        </button>
      </div>
    );
  }
}

export default Counter;
