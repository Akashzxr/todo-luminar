import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextareaAutosize from "react-textarea-autosize";
import {
  DateCalendar,
  DatePicker,
  DatePickerToolbar,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { addTask } from '../redux/todoSlice'

function TodoInput() {

  const [FormatedDate, setDate] = useState(0);
  const [task,setTask] = useState();
  const dispatch = useDispatch();


  const handleDate = (e) => {
    const date = new Date(e.$d);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
   // console.log(`${day}/${month}/${year}`);
    setDate(`${day}/${month}/${year}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const data = {todo:task,date:FormatedDate}
      dispatch(addTask(data));
      setTask('');
    }
  };

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      }}
      className="flex items-start p-5 justify-between w-11/12 bg-white rounded-3xl md:w-1/2"
    >
      <div
        style={{ backgroundColor: "#dee0e4" }}
        className="w-8 h-8 rounded-md bg-slate-300"
      ></div>


      <TextareaAutosize
        placeholder="write a new task   //press enter to submit"
        className="w-9/12 md:w-10/12 resize-none"
        onChange={(e)=>{setTask(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        value={task}
      />

      <div
        style={{ backgroundColor: "#dee0e4" }}
        className="w-8 h-8 rounded-md flex items-center justify-center relative"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slotProps={{
              textField: {
                style: { position: "absolute", right: "-6px", opacity: "0" },
              },
            }}
            onChange={handleDate}
          />
          <FontAwesomeIcon icon={faCalendar} />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default TodoInput;
