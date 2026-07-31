import { useState } from "react";
import Card from "./Card";
import Badge from "./Badge";

export default function CardGroup({
  filteredCards,
  handleToggle,
  handleDelete,
}) {
  const [pendingDeleteId, setPendingDeleteId] = useState(null);

  const handleDeleteRequest = (id) => {
    setPendingDeleteId(id);
  };

  const cancelDelete = () => {
    setPendingDeleteId(null);
  };

  const confirmDelete = () => {
    if (pendingDeleteId !== null) {
      handleDelete(pendingDeleteId);
      setPendingDeleteId(null);
    }
  };

  return (
    <>
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
              onDeleteRequest={handleDeleteRequest}
            />
          ))
        ) : (
          <p>No cards match the selected filter</p>
        )}
      </div>
      {pendingDeleteId !== null && (
        <div className="modal-overlay">
          <div className="modal" role="dialog" aria-modal="true">
            <h3>Remove extension?</h3>
            <p>
              Are you sure you want to remove this extension? This action cannot
              be undone.
            </p>
            <div className="modal-actions">
              <Badge variant="secondary" onClick={cancelDelete}>
                Cancel
              </Badge>
              <Badge variant="secondary" onClick={confirmDelete}>
                Remove
              </Badge>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
