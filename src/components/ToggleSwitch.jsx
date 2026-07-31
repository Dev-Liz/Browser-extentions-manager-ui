import React from "react";
import { cn } from "../../lib/utils";

export default function ToggleSwitch({ isToggled, onToggle, card }) {
  return (
    <div className="p-8">
      <label htmlFor="check" className="toggle-label">
        <input
          type="checkbox"
          id="check"
          checked={isToggled}
          className="sr-only peer"
        />
        <span
          className={cn("toggle-bg", isToggled ? "toggle-bg-active" : "")}
        ></span>
        <span
          onClick={() => onToggle(card.id)}
          className={cn("toggle-ring", isToggled ? "toggle-ring-active" : "")}
        ></span>
      </label>
    </div>
  );
}
