import React from "react";

import Block from "./Block";
import BlockAdder from "./BlockAdder";
import BlockList from "./BlockList";

const dummyBlocks = [
  <Block 
    type="math"
  />,
  <Block 
    type="code"
  />,
  <Block 
    type="heading"
  />,
  <Block />, // default type: text
  <Block 
    type=""
  />,
  <Block 
    type="table"
  />,
  <Block
    type="srs"
  />,
  <Block
    type="image"
  />,
  <Block  
    type="sound"
  />,
  <Block
    type="graphics"
  />
];

class BlockDashboard extends React.Component {
  state = {
    blocks: [],
  };

  componentDidMount() {
    this.setState({ blocks: dummyBlocks });
  }

  render() {
    return (
      <div>
        <BlockList
          blocks = {this.state.blocks}
        />
        <BlockAdder />
      </div>
    );
  }
}