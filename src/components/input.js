import { Component } from "react";
import { IonIcon } from "@ionic/react";
import { moonOutline, diamondOutline } from "ionicons/icons";
import Button from "./button";
class Input extends Component {
  constructor(props) {
    super(props);
  }
  state = { showpass: true, phone: "" };
  toggleflag() {
    this.setState({ showpass: !this.state.showpass });
    console.log(this.state?.showpass);
  }

  render() {
    const { label, erp, ...props } = this.props;
    return (
      <form
        className={label}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state.phone, this.state.password);
          if (this.state.phone.length === 4 || this.state.phone.length === 0) {
            console.log(this.state.phone.length);
            console.log("okkkkkk");
            this.setState({ errorme: null });
          } else {
            this.setState({ errorme: erp });
            console.log(this.state.errorme);
          }
        }}
      >
        {console.log(this.state.phone.length, this.state.phone)}
        <label>
          <input
            type="phone"
            onChange={(e) => {
              this.setState({
                ...this.state,
                phone: e.target.value,
              });

              if (
                this.state.phone.length +1 >=4 ||
                this.state.phone.length+1 === 0
              ) {
                console.log(this.state.phone.length, this.state.phone);
                console.log("okkkkkk");
                this.setState({ errorme: null });
              } else {
                this.setState({ errorme: erp });
                console.log(this.state.errorme);
              }
            }}
          />

          {this.state.errorme && (
            <span style={{ color: "red" }}>{this.state.errorme}</span>
          )}
        </label>
        <label style={{ display: "flex", justifyContent: "center" }}>
          <input
            type={this.state.showpass ? "text" : "password"}
            onChange={(e) => {
              this.setState({ ...this.state, password: e.target.value });
            }}
          />
          <span>
            {this.state.showpass ? (
              <IonIcon
                icon={moonOutline}
                size="large"
                onClick={() => {
                  this.toggleflag();
                  console.log("diamond:", this.state.showpass);
                }}
              ></IonIcon>
            ) : (
              <IonIcon
                icon={diamondOutline}
                size="large"
                onClick={() => this.toggleflag()}
              ></IonIcon>
            )}
          </span>
        </label>
        <Button buttonstyle={"stylebtn"} type={"submit"}>
          login
        </Button>
        <span className={"spanel"}>the error is:{this.state.errorme}</span>
      </form>
    );
  }
}

export default Input;
