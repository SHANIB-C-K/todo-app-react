import React, { useEffect, useState } from "react";
import List from "../List/List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const Home = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [altert, setAltert] = useState(false);
  const [editId, seteditId] = useState(null);
  const [isEditing, setisEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      showAlert(true, "danger", "please enter value");
    } else if (task && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: task };
          }
          return item;
        })
      );
      setTask("");
      seteditId(null);
      setisEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getDate().toString(), title: task };
      setList([...list, newItem]);
      setTask('');
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAltert({ show, type, msg });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="todo-form" onSubmit={handleSubmit}>
        <h3>Todo App</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter a task"
            className="todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      <div className="todo-container">
        <List />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
};

export default Home;
