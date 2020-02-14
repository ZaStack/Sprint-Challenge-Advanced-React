import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./components/playerCard";
import Nav from "./components/nav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/footballers")
      .then(res => {
        console.log("Footballers", res.data);
        this.setState({ players: res.data });
      })
      .catch(err => {
        console.log("Data error", err);
      });
  }

  render() {
    return (
      <div className="container">
        <Nav />
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    );
  }
}

export default App;
