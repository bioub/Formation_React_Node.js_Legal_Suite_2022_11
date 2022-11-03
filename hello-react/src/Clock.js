import { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Clock',
      now: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        // name est préservé
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    const { now } = this.state;
    return (
      <div className="Clock">
        {now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
