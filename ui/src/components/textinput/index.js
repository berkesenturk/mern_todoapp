import { useState, useContext } from "react";


import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import AddIcon from "@mui/icons-material/Add";

import { Stack } from "@mui/system";

import { TaskContext } from "../../contexts/TaskContext";

export default function FullWidthTextField(props) {
  const [textInput, setTextInput] = useState("");
  const taskList = useContext(TaskContext);

  // usecontext here!!! bcz value will change on submit

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted task: ", textInput);
    console.log("adding to...: ", taskList[props.name]);
    taskList[props.name].push(textInput);

    console.log(`new tasklist for ${props.name}: `, taskList[props.name]);
  }

  return (
    <Stack direction="row">
      <TextField
        sx={{
          mx: 2
        }}
        variant="standard"
        label="Task"
        id="fullWidth"
        name="task-input"
        width="100%"
        inputRef={textRef}
        onSubmit={() => {
          setData([...data, textRef.current.value]);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setData([...data, textRef.current.value]); // useReducer
          }
        }}
      />
      <IconButton
        size="small"
        type="submit"
        onClick={() => {
          // console.log(typeof data, data);
          setData([...data, textRef.current.value]); // useReducer
        }}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
}
