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
  onDelete,
}) {
  const [isOn, setIsOn] = useState(isActive);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

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
        <Badge variant="secondary" onClick={() => onDelete(card.id)}>
          Remove
        </Badge>
        <ToggleSwitch isToggled={isOn} onToggle={onToggle} card={card} />
      </div>
    </div>
  );
}
