import { useState } from "react";
import Card from "./Card";

export default function CardGroup({
  filteredCards,
  handleToggle,
  handleDelete,
}) {
  return (
    <div className="card-group">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <Card
            key={card.id}
            logo={card.logo}
            name={card.name}
            description={card.description}
            isActive={card.isActive}
            card={card}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>No cards match the selected filter</p>
      )}
    </div>
  );
}
