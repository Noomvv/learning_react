import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Image from './components/image';
import React from 'react';
import logo1 from './img/IMG_2996.JPG';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "Help text!",
      userData: "",
    }

    this.inputClick = this.inputClick.bind(this);
  }

  componentDidUpdate(prevProp) {
    if(this.state.helpText !== "Help")
      console.log("Some");
  }

  helpText = "Help text!";
  render() {
    return (
      <div>
        <Header title="это шапка" />
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input placeholder={this.state.helpText}
          onChange={event => this.setState({userData: event.target.value})}
          onClick={this.inputClick} onMouseEnter={this.mouseOver} />
        <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
        <Image image={logo1} />
      </div>
    );
  }

  inputClick() {
    this.setState({helpText: "Changed!"})
    console.log("Clicked");}
  mouseOver() {console.log("Mouse Over");}
}

export default App;
