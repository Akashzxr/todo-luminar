import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask,completeTask } from "../redux/todoSlice";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function TodoDisplay() {
  const task = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();

  return (
    <div className="mt-12 w-full flex items-center justify-center">
      <ul className=" w-11/12 md:w-1/2 h-96 overflow-y-auto pr-2">
        {task.map((items, index) => (
          <li
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            }}
            className="mt-8 bg-white w-full h-max min-h-12 rounded-md px-3 flex items-center justify-between"
          >
            <div className="flex gap-5 items-center w-3/4">
              <span onClick={()=>dispatch(completeTask(index))}>
                <FontAwesomeIcon className="text-4xl" icon={faCircleCheck} color="green" />
              </span>

              <span
                onClick={() => dispatch(deleteTask(index))}
                className="w-9 h-8 min-w-8 flex items-center justify-center rounded-md text-white bg-red-600"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </span>

              <div style={items.completed ? {textDecoration:'line-through'} : null}>{items.todo}</div>
              
            </div>
            <span>{items.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    width: 32rem;
    min-height: 3rem;
    border-radius: 7px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between; */

export default TodoDisplay;
