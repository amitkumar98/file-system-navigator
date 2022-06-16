import React, { useState } from "react";
import "./ExpandViewStyles.css";
import { ReactComponent as ExpandRight } from "../../assets/Expand_right_light.svg";
import { ReactComponent as ExpandDown } from "../../assets/Expand_down_light.svg";
import { ReactComponent as FolderIcon } from "../../assets/Folder_fill.svg";
import { ReactComponent as File } from "../../assets/Order_light.svg";

const ExpandView = ({ rootLabel, childItems, id }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="expandview-root">
      {childItems && childItems.length > 0 && (
        <>
          <div
            className="expandview-container"
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
            <span>{rootLabel}</span>
          </div>
          {open &&
            childItems.map((itm, idx) => {
              if (!itm.flag) {
                return (
                  <div
                    key={Math.random()}
                    className="expandedview-container"
                    style={{
                      marginLeft:
                        typeof id !== "undefined" ? `${(id + 3) * 10}px` : 20,
                    }}
                  >
                    <File />
                    <span>{itm.name}</span>
                  </div>
                );
              }
              return (
                <ExpandView
                  key={Math.random()}
                  rootLabel={itm.name}
                  childItems={itm.items}
                  flag={itm.flag}
                  id={typeof id !== "undefined" ? id : 1}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default ExpandView;
