import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="todo-list">
      {items.map((item) => (
        <article className="todo-item" key={item.id}>
          <p>{item.title}</p>
          <div className="btn-container">
            <button className="edit-btn" onClick={() => editItem(item.id)}>
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={() => removeItem(item.id)}>
              <FaTrash />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default List;
