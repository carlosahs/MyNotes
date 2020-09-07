import React from "react";

import Block from "./Block";
import BlockAdder from "./BlockAdder";
import BlockList from "./BlockList";

const dummyBlocks = [
  <Block 
    key={1}
    type="math"
  />,
  <Block 
    key={2}
    type="code"
  />,
  <Block 
    key={3}
    type="heading"
  />,
  <Block
    key={4}
  />, // default type: text
  <Block 
    key={5}
    type="table"
  />,
  <Block
    key={6}
    type="srs"
  />,
  <Block
    key={7}
    type="image"
  />,
  <Block
    key={8}  
    type="sound"
  />,
  <Block
    key={9}
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