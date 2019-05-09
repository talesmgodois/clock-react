import React, { Component, Fragment } from "react";

// import { Container } from './styles';

export default class src extends Component {
  state = {
    time: new Date(),
  };
  render() {
    const msg = "Hi Guys";
    return <Fragment>{msg}</Fragment>;
  }
}
