import React from "react";
import {
  User,
  Plus,
  MoreHorizontal,
  Circle,
  CheckCircle,
  AlertCircle,
  MoreHorizontalIcon,
  AlertTriangle,
  SignalHigh,
  SignalLow,
  SignalMedium,
  CircleDot,
} from "lucide-react";
import Card from "./card";
import { useAPIContext } from "../context/useApi";

const statusToIcon = {
  Todo: <Circle width={16} height={16} />,
  "In progress": <CircleDot width={16} height={16} />,
  Done: <CheckCircle width={16} height={16} />,
  Backlog: <AlertCircle width={16} height={16} />,
};

const priorityToIcon = {
  0: {
    title: "No Priority",
    icon: <MoreHorizontalIcon width={16} height={16} />,
  },
  1: {
    title: "Low",
    icon: <SignalLow width={16} height={16} />,
  },
  2: {
    title: "Medium",
    icon: <SignalMedium width={16} height={16} />,
  },
  3: {
    title: "High",
    icon: <SignalHigh width={16} height={16} />,
  },
  4: {
    title: "Urgent",
    icon: <AlertTriangle width={16} height={16} />,
  },
};

const List = ({ el }) => {
  const { grouping } = useAPIContext();
  return (
    <div
      style={{
        width: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "gray",
        }}
      >
        {grouping === "status" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {statusToIcon[el[0]]}
            <h4>{el[0]}</h4>
          </div>
        ) : grouping === "priority" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {priorityToIcon[el[0]]?.icon}
            <h4>{priorityToIcon[el[0]]?.title}</h4>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <User width={16} height={16} />
            <h4>{el[0]}</h4>
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Plus width={16} height={16} />
          <MoreHorizontal width={16} height={16} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {el[1].map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default List;
