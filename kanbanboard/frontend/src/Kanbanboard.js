import React from "react";
import data from "./assets/json/data";
import styles from "./assets/css/Kanbanboard.css";
import ToDoCardList from "./ToDoCardList";
import InProgressCardList from "./InProgressCardList";
import DoneCardList from "./DoneCardList";

function Kanbanboard() {
  const cardsToDo = data.filter((card) => card.status === "ToDo");
  const cardsInProgress = data.filter((card) => card.status === "Doing");
  const cardsDone = data.filter((card) => card.status === "Done");

  return (
    <div className={styles.KanbanBoard}>
      <ToDoCardList cards={cardsToDo} />
      <InProgressCardList cards={cardsInProgress} />
      <DoneCardList cards={cardsDone} />
    </div>
  );
}

export default Kanbanboard;
