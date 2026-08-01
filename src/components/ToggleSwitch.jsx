import React from "react";
import { cn } from "../lib/utils";

export default function ToggleSwitch({ id, name, checked, onToggle }) {
  const inputId = `extension-${id}`;

  return (
    <div className="p-8">
      <label htmlFor={inputId} className="toggle-label">
        <input
          id={inputId}
          type="checkbox"
          aria-label={`Toggle ${name}`}
          checked={checked}
          onChange={() => onToggle(id)}
          className="sr-only peer"
        />
        <span className={cn("toggle-bg", checked && "toggle-bg-active")}></span>
        <span
          className={cn("toggle-ring", checked && "toggle-ring-active")}
        ></span>
      </label>
    </div>
  );
}
