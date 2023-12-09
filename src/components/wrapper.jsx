import React from "react";
import Style from "../css/wrapper.module.css";
import Nav from "./nav";
import List from "./list";
import { useAPIContext } from "../context/useApi";

export const Wrapper = () => {
  const { isLoading, updatedState } = useAPIContext();
  return isLoading ? (
    <>loading....</>
  ) : updatedState ? (
    <div>
      <div className={Style.navbar}>
        <Nav />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: "70px",
          justifyContent: "start",
          padding: "30px 40px",
          overflowX: "auto",
        }}
      >
        {Object.entries(updatedState).map((el, i) => (
          <List key={i} el={el} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};
