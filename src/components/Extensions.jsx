import { useState } from "react";
import data from "../data.json";
import CardGroup from "./CardGroup";
import CardsHeader from "./CardsHeader";

export default function Extensions() {
  const [cards, setCards] = useState(data);
  const [filter, setFilter] = useState("All");

  const handleToggle = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isActive: !card.isActive } : card,
      ),
    );
  };

  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const filteredCards = cards.filter((card) => {
    if (filter === "Active") return card.isActive;
    if (filter === "Inactive") return !card.isActive;
    return true;
  });

  return (
    <main className="card-main">
      <CardsHeader filter={filter} setFilter={setFilter} />
      <CardGroup
        filteredCards={filteredCards}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </main>
  );
}
