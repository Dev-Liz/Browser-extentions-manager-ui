import React from "react";
import Badges from "./Badges";
import ToggleSwitch from "./ToggleSwitch";

export default function CardsHeader() {
  return (
    <header className="cards-header">
      <h1>Extentions List</h1>
      <Badges />
    </header>
  );
}
