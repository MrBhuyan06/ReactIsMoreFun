import React from "react";

class DemoClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello {this.props.info.name} </h1>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Clikc
        </button>
      </div>
    );
  }
}

export default DemoClass;
