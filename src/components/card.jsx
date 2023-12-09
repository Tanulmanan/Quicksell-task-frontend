import React from "react";
import { CircleDashed, BarChart } from "lucide-react";

const Card = ({ card }) => {
  return (
    <div
      style={{
        width: "400px",
        padding: "12px 16px",
        borderRadius: "4px",
        background: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      }}
    >
      <p
        style={{
          color: "GrayText",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {card.id}
      </p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "start",
        }}
      >
        <CircleDashed width={24} height={24} />
        <h2 style={{ fontSize: "16px", fontWeight: "normal" }}>{card.title}</h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {card.tag.map((el, i) => (
          <p
            key={i}
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              fontSize: "12px",

              padding: "2px 8px",
              borderRadius: "12px",
              border: "0.25px solid gray",
              width: "fit-content",
            }}
          >
            <BarChart width={12} height={12} />
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
