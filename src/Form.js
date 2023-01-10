import { Hobby } from "models/AuthnRequest";
import React from "react";

class FluidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: ""
    };
  }
  focusField() {
    const { focused } = this.state;
    this.setState({
      focused: !focused
    });
  }
  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value
    });
  }
  render() {
    const { type, label, style, id } = this.props;
    const { focused, value } = this.state;

    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value !== "") {
      inputClass += " fluid-input--open";
    }

    return (
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">

          <input
            className="fluid-input-input"
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}

          />
          <label className="fluid-input-label" >{label}</label>

        </div>
      </div>
    );
  }
}

export default function LoginContainer() {

  const style = {
    margin: "15px 0"
  };

  const loginClick = (e) => {
    console.log('click')

    const hobbies = [
      new Hobby('reading', 'loves to read books, magazines and web articles'),
      new Hobby('listening to Music', 'loves to listen to rock music'),
      new Hobby('travelling', 'loves to travel around the world'),
    ];
    // const pets = ['dog', 'cat'];
    // const bob = new Person('Bob', 'Mad', 29, hobbies, pets);

    // const bobXml = xml.serialize(bob);

    // console.log(bobXml);

  }

  return (
    <div className="login-container">
      <div className="title">
        Login
      </div>
      <FluidInput type="text" label="Tenant Name" id="tenant" style={style} />
      <FluidInput type="text" label="B2C Policy" id="policy" style={style} />
      <FluidInput type="text" label="Issuer" id="issuer" style={style} />
      {/* <Button buttonText="log in" buttonClass="login-button" /> */}
      <button className="button login-button" onClick={loginClick} >Log in</button>
    </div>
  );

}
