import React from "react";
import styles from "./assets/css/CardList.css";

function ToDoCardList(cards) {
  return (
    <div className={styles.CardList}>
      <h1>To Do</h1>

      {/* <!-- Begin: Card --> */}
      <div className={styles.Card}>
        <div className={styles.Card__Title}>Write some code</div>
        <div className="Card__Details">
          Code along with the samples in the book
          {/* <!-- Begin: TaskList --> */}
          <div className="TaskList">
            <ul>
              {/* <!-- Begin: TaskList Task--> */}
              <li className="TaskList__Task">
                <input type="checkbox" checked="true" />
                ContactList Example
                <a href="#" className="TaskList__Task--remove"></a>
              </li>
              {/* <!-- End: TaskList Task--> */}

              {/* <!-- Begin: TaskList Task--> */}
              <li className="TaskList__Task">
                <input type="checkbox" checked="false" />
                Kanban Example
                <a href="#" class="TaskList__Task--remove"></a>
              </li>
              {/* <!-- End: TaskList Task--> */}

              {/* <!-- Begin: TaskList Task--> */}
              <li className="TaskList__Task">
                <input type="checkbox" checked="false" />
                My own experiments
                <a href="#" className="TaskList__Task--remove"></a>
              </li>
              {/* <!-- End: TaskList Task--> */}
            </ul>
          </div>
          {/* <!-- End: TaskList --> */}
        </div>
      </div>
      {/* <!-- End: Card --> */}
    </div>
  );
}

export default ToDoCardList;
