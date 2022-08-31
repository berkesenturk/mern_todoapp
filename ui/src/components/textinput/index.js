import { useState, useRef, useEffect } from "react";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import AddIcon from "@mui/icons-material/Add";

import { Stack } from "@mui/system";

import { useTasks } from "../../contexts/TaskContext";

export default function FullWidthTextField(props) {
  
  const [textInput, setTextInput] = useState("");
  const [tasks, addTaskToList, removeTaskFromList] = useTasks() // why we should write like this useTasks(useTasks)
  const textRef = useRef();

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log("submitted task: ", textRef.current.value);
    console.log("adding to...: ", tasks[props.name]);
    
    addTaskToList(textRef.current.value, props.name)
    // setTextInput("")

    console.log(`new tasklist for ${props.name}: `, tasks[props.name]);
  };

  useEffect(() => {
    // textRef.current.value = ""
    console.log("USEEFFECT WORKED in text input");
  }, [tasks])

  return (

    <Stack direction="row">
      <TextField
        sx={{
          mx: 2,
          my: 2,
          minWidth: 330,
          maxWidth: 500
        }}
        variant="standard"
        label="Task"
        id="fullWidth"
        name="task-input"
        width="100%"
        inputRef={textRef}
        onChange= { () => { console.log(textRef.current.value) }}
        onSubmit={
          handleSubmit // useReducer
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e); // useReducer
          }
        }}
      />
      <IconButton
        size="small"
        type="submit"
        // onClick={() => {
        //   setData([...data, textRef.current.value]); // useReducer
        // }}
        onClick={handleSubmit}
      >
      <AddIcon />
    </IconButton>
  </Stack>
  );
}
