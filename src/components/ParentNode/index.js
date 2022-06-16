import React from "react";
import "./ParentNodeStyles.css";
import { ReactComponent as ExpandRight } from "../../assets/Expand_right_light.svg";
import { ReactComponent as ExpandDown } from "../../assets/Expand_down_light.svg";
import { ReactComponent as FolderIcon } from "../../assets/Folder_fill.svg";

const ParentNode = ({ id, label, open, setOpen }) => {
  return (
    <div
      className="parentnode-container"
      onClick={() => setOpen(!open)}
      style={{
        marginLeft: typeof id !== "undefined" ? `${(id + 1) * 10}px` : 0,
      }}
    >
      {open ? (
        <ExpandDown className="nav-icons" />
      ) : (
        <ExpandRight className="nav-icons" />
      )}
      <FolderIcon className="folder-icon" />
      <span>{label}</span>
    </div>
  );
};

export default ParentNode;
