import React, { useState } from "react";
import { Settings, ChevronDown } from "lucide-react";
import Styles from "../css/wrapper.module.css";
import { useClickAway } from "@uidotdev/usehooks";
import { useAPIContext } from "../context/useApi";

const Display = () => {
  const [open, setOpen] = useState(false);
  const { setOrdering, setGrouping, grouping, ordering } = useAPIContext();

  const ref = useClickAway(() => {
    setOpen(false);
  });

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((open) => !open)}
        className={Styles.display_button}
        style={{
          fontSize: "12px",
        }}
      >
        <Settings width={12} height={12} /> Settings{" "}
        <ChevronDown width={12} height={12} />
      </button>
      {open && (
        <dialog
          ref={ref}
          style={{
            fontSize: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "150px",
          }}
          className={Styles.dialog}
        >
          <div
            style={{
              width: "full",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Grouping</p>
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
              className={Styles.select}
            >
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div
            style={{
              width: "full",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Ordering</p>
            <select
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
              className={Styles.select}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Display;
