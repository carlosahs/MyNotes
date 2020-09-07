import React from "react";

import { v4 as uuidv4 } from "uuid";
// React components
import Block from "./Block";
import BlockAdder from "./BlockAdder";
import BlockContainer from "./BlockContainer"
import BlockList from "./BlockList";

const blockTypes = [
  "math", "code", "heading", 
  "text", "table", "srs", 
  "image", "sound", "graphics"
];

const blockData = blockTypes.map(type => {
  return {
    "id": uuidv4(),
    "type": type,
    "content": "",
  };
});

const dummyBlocks = "";

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