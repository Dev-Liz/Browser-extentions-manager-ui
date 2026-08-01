import { useState } from "react";
import Badge from "./Badge";
import ToggleSwitch from "./ToggleSwitch";

export default function Card({
  logo,
  name,
  description,
  isActive,
  card,
  onToggle,
  onDeleteRequest,
}) {
  return (
    <div className="card">
      <div className="card-top">
        <img src={logo} alt="card-logo" />
        <div className="flex-vertical">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-bottom">
        <Badge variant="secondary" onClick={() => onDeleteRequest(card.id)}>
          Remove
        </Badge>
        <ToggleSwitch
          id={card.id}
          name={name}
          checked={isActive}
          onToggle={onToggle}
        />
      </div>
    </div>
  );
}
