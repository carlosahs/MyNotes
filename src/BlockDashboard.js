import React from "react";

import Block from "./Block";
import BlockAdder from "./BlockAdder";
import BlockContainer from "./BlockContainer"
import BlockList from "./BlockList";

const dummyBlocks = [
  <BlockContainer
    key={1}
    type="math"
  />,
  <BlockContainer 
    key={2}
    type="code"
  />,
  <BlockContainer 
    key={3}
    type="heading"
  />,
  <BlockContainer
    key={4}
  />, // default type: text
  <BlockContainer 
    key={5}
    type="table"
  />,
  <BlockContainer
    key={6}
    type="srs"
  />,
  <BlockContainer
    key={7}
    type="image"
  />,
  <BlockContainer
    key={8}  
    type="sound"
  />,
  <BlockContainer
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

export default BlockDashboard;