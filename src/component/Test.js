import React from "react";
import Button from "@material-ui/core/Button";
import Test from "../component/Test";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Hand1: ["|"],
      player1Hand2: ["|"],
      player2Hand1: ["|"],
      player2Hand2: ["|"],
      displayStatus1: true,
      displayStatus2: true,
      displayPlayer1Div: true,
      displayPlayer2Div: true,
      selectedDiv: "player1Hand1",
      previousValue: []
    };
  }
  componentWillMount() {
    this.setState({
      displayStatus2: !this.state.displayStatus1,
      selectedDiv: this.state.displayStatus1 ? "player1Hand1" : "player2Hand1"
    });
  }
  handlePlayer1Hand = () => {
    this.setState({ displayStatus2: false });
  };
  handlePlayer2Hand = () => {
    this.setState({ displayStatus1: false });
  };
  countHandOfPlayer1Hand1 = () => {
    if (this.state.player1Hand1.concat(this.state.previousValue).length < 6) {
      var currentValue = this.state.player1Hand1.concat(
        this.state.previousValue
      );
      this.setState({
        displayStatus2: true,
        player1Hand1: currentValue,
        previousValue: currentValue
      });
    } else {
      this.setState({ previousValue: [] });
      alert("wrong choice");
    }
  };
  countHandOfPlayer1Hand2 = () => {
    if (this.state.player1Hand2.concat(this.state.previousValue).length < 6) {
      var currentValue = this.state.player1Hand2.concat(
        this.state.previousValue
      );
      this.setState({
        displayStatus1: true,
        player1Hand2: currentValue,
        previousValue: currentValue
      });
    } else {
      this.setState({ previousValue: [] });
      alert("wrong choice");
    }
  };
  countHandOfPlayer2Hand1 = () => {
    if (this.state.player2Hand1.concat(this.state.previousValue).length < 6) {
      var currentValue = this.state.player2Hand1.concat(
        this.state.previousValue
      );
      this.setState({
        displayStatus2: true,
        player2Hand1: currentValue,
        previousValue: currentValue
      });
    } else {
      this.setState({ previousValue: [] });
      alert("wrong choice");
    }
  };
  countHandOfPlayer2Hand2 = () => {
    if (this.state.player2Hand1.concat(this.state.previousValue).length < 6) {
      var currentValue = this.state.player2Hand2.concat(
        this.state.previousValue
      );
      this.setState({
        displayStatus1: true,
        player2Hand2: currentValue,
        previousValue: currentValue
      });
    } else {
      this.setState({ previousValue: [] });
      alert("wrong choice");
    }
  };
  render() {
    const {
      displayStatus1,
      displayStatus2,
      displayPlayer2Div,
      displayPlayer1Div,
      selectedDiv
    } = this.state;
    if (
      this.state.player1Hand1.length === 5 &&
      this.state.player1Hand2.length === 5
    ) {
      alert("Player 2 Win Congratulation");
      this.setState({
        player1Hand1: ["|"],
        player1Hand2: ["|"],
        player2Hand1: ["|"],
        player2Hand2: ["|"]
      });
    } else if (
      this.state.player2Hand1.length === 5 &&
      this.state.player2Hand2.length === 5
    ) {
      alert("Player 1 Win Congratulation");
      this.setState({
        player1Hand1: ["|"],
        player1Hand2: ["|"],
        player2Hand1: ["|"],
        player2Hand2: ["|"]
      });
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <div
          style={{
            display: displayPlayer1Div ? "flex" : "none",
            justifyContent: "space-around",
            marginBottom: "10px",
            alignItems: "center"
          }}
        >
          <div
            id="player1Hand1"
            style={{
              display: this.state.player1Hand1.length < 5 ? "flex" : "none",
              flexDirection: "column",
              width: "200px",
              height: "200px",
              borderColor: selectedDiv === "player1Hand1" ? "red" : null,
              backgroundColor: "yellow",
              justifyContent: "space-around",
              alignItems: "center"
            }}
            onClick={this.countHandOfPlayer1Hand1}
          >
            <img
              src="p1.png"
              alt=""
              style={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <div>
              {this.state.player1Hand1.map(data => (
                <span>|</span>
              ))}
            </div>
            <div>Player1Hand1</div>
          </div>

          <div
            id="player1Hand2"
            style={{
              display: this.state.player1Hand2.length < 5 ? "flex" : "none",
              flexDirection: "column",
              width: "200px",
              height: "200px",
              borderColor: selectedDiv === "player1Hand2" ? "red" : null,
              backgroundColor: "yellow",
              justifyContent: "space-around",
              alignItems: "center"
            }}
            onClick={this.countHandOfPlayer1Hand2}
          >
            <img
              src="p1.png"
              alt=""
              style={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <div>
              {this.state.player1Hand2.map(data => (
                <span>|</span>
              ))}
            </div>
            <div>player1Hand2</div>
          </div>
        </div>

        <div
          style={{
            display: displayPlayer2Div ? "flex" : "none",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <div
            id="player2Hand1"
            style={{
              display: this.state.player2Hand1.length < 5 ? "flex" : "none",
              flexDirection: "column",
              borderColor: selectedDiv === "player2Hand1" ? "red" : null,
              width: "200px",
              height: "200px",
              backgroundColor: "green",
              justifyContent: "space-around",
              alignItems: "center"
            }}
            onClick={this.countHandOfPlayer2Hand1}
          >
            <img
              src="p2.png"
              alt=""
              style={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <div>
              {this.state.player2Hand1.map(data => (
                <span>|</span>
              ))}
            </div>
            <div>Player2Hand1</div>
          </div>

          <div
            id="player2Hand2"
            style={{
              display: this.state.player2Hand2.length < 5 ? "flex" : "none",
              flexDirection: "column",
              borderColor: selectedDiv === "player2Hand2" ? "red" : null,
              justifyContent: "space-around",
              width: "200px",
              height: "200px",
              backgroundColor: "green",
              alignItems: "center"
            }}
            onClick={this.countHandOfPlayer2Hand2}
          >
            <img
              src="p2.png"
              alt=""
              style={{ height: "80px", width: "80px", borderRadius: "50%" }}
            />
            <div>
              {this.state.player2Hand2.map(data => (
                <span>|</span>
              ))}
            </div>
            <div>player2Hand2</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled={displayStatus1 ? false : true}
          >
            Player 1 Turn
          </Button>

          <Button
            variant="contained"
            color="primary"
            disabled={displayStatus2 ? false : true}
          >
            Player 2 Turn
          </Button>
        </div>
      </div>
    );
  }
}
export default TestComponent;
