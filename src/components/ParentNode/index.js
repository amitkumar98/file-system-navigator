import React from "react";
import { ReactComponent as ExpandRight } from "../../assets/Expand_right_light.svg";
import { ReactComponent as ExpandDown } from "../../assets/Expand_down_light.svg";
import { ReactComponent as FolderIcon } from "../../assets/Folder_fill.svg";

const ParentNode = ({ id, label, open, setOpen }) => {
  return (
    <div
      className="parentnode-container"
      style={{
        marginLeft: typeof id !== "undefined" ? `${(id + 1) * 10}px` : 0,
      }}
    >
      {open ? (
        <ExpandDown onClick={() => setOpen(!open)} />
      ) : (
        <ExpandRight onClick={() => setOpen(!open)} />
      )}
      <FolderIcon />
      <span>{label}</span>
    </div>
  );
};

export default ParentNode;
