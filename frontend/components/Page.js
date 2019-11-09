import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Meta from "./Meta";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
