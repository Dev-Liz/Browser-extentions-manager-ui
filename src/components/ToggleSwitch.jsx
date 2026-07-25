import React from "react";
import { cn } from "../../lib/utils";

export default function ToggleSwitch({ isToggled, onToggle }) {
  return (
    <div className="p-8">
      <label htmlFor="check" className="toggle-label">
        <input type="checkbox" id="check" className="sr-only peer" />
        <div
          className={cn("toggle-bg", isToggled ? "toggle-bg-active" : "")}
        ></div>
        <span
          onClick={onToggle}
          className={cn("toggle-ring", isToggled ? "toggle-ring-active" : "")}
        ></span>
      </label>
    </div>
  );
}
