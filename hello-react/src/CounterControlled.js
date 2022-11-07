import { Component } from "react";

// class CounterControlled extends Component {
//   constructor() {
//     super();
//     // permet que this ne soit pas undefined dans handleClick :
//     this.handleClick = this.handleClick.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     const { onStepChange } = this.props;
//     onStepChange(event.target.valueAsNumber);
//   }
//   handleClick() {
//     const { step, count, onIncrement } = this.props;
//     onIncrement(count + step);
//   }
//   render() {
//     const { step, count } = this.props;
//     return (
//       <div className="CounterControlled">
//         <input type="number" name="step" value={step} onChange={this.handleChange} />
//         <button onClick={this.handleClick}>
//           {count}
//         </button>
//       </div>
//     );
//   }
// }

function CounterControlled({ step, count, onIncrement, onStepChange }) {
  const handleChange = (event) => {
    onStepChange(event.target.valueAsNumber);
  }
  const handleClick = () => {
    onIncrement(count + step);
  }
  return (
    <div className="CounterControlled">
      <input type="number" name="step" value={step} onChange={handleChange} />
      <button onClick={handleClick}>
        {count}
      </button>
    </div>
  );
}

export default CounterControlled;
