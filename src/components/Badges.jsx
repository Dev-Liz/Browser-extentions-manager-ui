import React from "react";
import Badge from "./Badge";
import { cn } from "../../lib/utils";

export default function Badges({ filter, setFilter }) {
  const badgeStatus = ["All", "Active", "Inactive"];

  return (
    <div classname="badges-flex">
      {badgeStatus.map((status) => (
        <Badge
          key={status}
          onClick={() => setFilter(status)}
          variant={filter === status ? "active" : "default"}
        >
          {status}
        </Badge>
      ))}
    </div>
  );
}
