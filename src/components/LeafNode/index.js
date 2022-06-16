import React from "react";
import "./LeafNodeStyles.css";
import { ReactComponent as File } from "../../assets/File.svg";

const LeafNode = ({ id, item }) => {
  return (
    <div
      className="leafnode-container"
      style={{
        marginLeft: typeof id !== "undefined" ? `${id * 10 + 30}px` : 30,
      }}
    >
      <File className="file-icon" />
      <span>{item.name}</span>
    </div>
  );
};

export default LeafNode;
