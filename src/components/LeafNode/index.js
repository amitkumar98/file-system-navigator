import React from "react";
import "./LeafNodeStyles.css";
import { ReactComponent as File } from "../../assets/Order_light.svg";

const LeafNode = ({ id, item }) => {
  return (
    <div
      className="leafnode-container"
      style={{
        marginLeft: typeof id !== "undefined" ? `${(id + 3) * 10}px` : 20,
      }}
    >
      <File />
      <span>{item.name}</span>
    </div>
  );
};

export default LeafNode;
