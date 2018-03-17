import React, { Component } from "react";
import { Jumbotron, Grid} from "react-bootstrap";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Notodolist</h2>
        </Jumbotron>
      </Grid>
    );
  }
}

export default Home;
