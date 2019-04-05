import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Nav from "./components/Nav/Nav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        throw new Error("Failed to get a list of smurfs", err);
      });
  }

  newSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        throw new Error("Failed to add a smurf to list of smurfs", err);
      });
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Nav />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              smurfs={this.state.smurfs}
              {...props}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm newSmurf={this.newSmurf} {...props} />}
        />
      </div>
    );
  }
}

export default App;
