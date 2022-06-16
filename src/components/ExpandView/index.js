import React, { useState } from "react";
import "./ExpandViewStyles.css";
import LeafNode from "../LeafNode";
import ParentNode from "../ParentNode";

const ExpandView = ({ label, childItems, id }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="expandview-root">
      {childItems && childItems.length > 0 && (
        <>
          <ParentNode id={id} label={label} open={open} setOpen={setOpen} />
          {open &&
            childItems.map((item) => {
              if (!item.flag) {
                return (
                  <div key={Math.random()}>
                    <LeafNode id={id} item={item} />
                  </div>
                );
              }
              return (
                <ExpandView
                  key={Math.random()}
                  label={item.name}
                  childItems={item.items}
                  flag={item.flag}
                  id={typeof id !== "undefined" ? id + 1 : 1}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default ExpandView;
