import React from "react";
import Badges from "./Badges";
import ToggleSwitch from "./ToggleSwitch";

export default function CardsHeader({ filter, setFilter }) {
  return (
    <header className="cards-header">
      <h1>Extentions List</h1>
      <Badges filter={filter} setFilter={setFilter} />
    </header>
  );
}
