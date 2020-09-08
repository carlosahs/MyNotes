import React from "react";

import { v4 as uuidv4 } from "uuid";
// React components
import Block from "./Block";
import BlockAdder from "./BlockAdder";
import EditableBlock from "./EditableBlock"
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

const dummyBlocks = blockData.map(block => {
  return (
    <EditableBlock
      key={block.id}
      id={block.id}
      type={block.type}
      content={block.content}
    />
  );
});

class BlockDashboard extends React.Component {
  state = {
    blocks: [],
  };

  componentDidMount() {
    this.setState({ blocks: dummyBlocks });
  }

  addBlock = () => {};
  removeBlock = () => {};  
  updateBlock = () => {};

  render() {
    return (
      <div>
        <BlockList
          blocks={this.state.blocks}
          onBlockRemoval={this.removeBlock}
          onBlockupdate={this.updateBlock}
        />
        <BlockAdder 
          onBlockAddition={this.addBlock}
        />
      </div>
    );
  }
}

export default BlockDashboard;