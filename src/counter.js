import QndReact from "./qnd-react";

export default class Counter extends QndReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // setInterval(()=>{
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // }, 1000);
  }
  componentDidMount() {
    console.log("Component Mounted!");
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count} </p>
        <button
          onClick={() => this.setState({
            count: this.state.count + 1
          })}
        >
          Increment
      </button>
       { " "}<button
          onClick={() => this.setState({
            count: this.state.count - 1
          })}
        >
          Decrement
      </button>
      </div>
    );

  }
}