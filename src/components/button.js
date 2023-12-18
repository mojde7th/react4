import { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    const { buttonstyle, ...props } = this.props;
    return (
      <button
        className={buttonstyle}
        type={this.props.type || "button"}
        {...props}
      ></button>
    );
  }
}

export default Button;
