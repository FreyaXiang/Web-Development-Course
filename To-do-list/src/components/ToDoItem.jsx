import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function ToDoItem(props) {
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!isClicked);
  }
  return (
    <div>
      <li>
        <span
          onClick={handleClick}
          style={{ textDecoration: isClicked && "line-through" }}
        >
          {props.text}
        </span>
        <span
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          <DeleteIcon style={{ position: "absolute", right: "10px" }} />
        </span>
      </li>
    </div>
  );
}

export default ToDoItem;
