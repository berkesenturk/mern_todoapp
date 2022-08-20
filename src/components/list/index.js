import * as React from "react";
import List from "@mui/material/List";
import ItemList from "../listitem";
// import FullWidthTextField from '../textRef';
import { useTaskContext } from "../../contexts/TaskContext";
import { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { Stack } from "@mui/system";

export default function CheckboxList(props) {
  const { tasks, addToTasks } = useTaskContext();
  const textRef = useRef("");
  const [taskDataState, setTaskDataState] = useState(0);

  useEffect(() => {
    console.log("useffect worked on list comp");
  }, [tasks, taskDataState]);

  const showRefContent = () => {
    console.log(textRef.current.value);

    // addToTasks("textRef.current.value", props.name);
    addToTasks(textRef.current.value, props.name);
    let newState = taskDataState + 1;
    setTaskDataState(newState);

    console.log(taskDataState);

    console.log("added --> ", tasks[props.name], " ", props.name);
  };

  return (
    <>
      <List
        id={props.name}
        sx={{
          width: "100%",
          my: 1,
          maxWidth: 360,
          bgcolor: "beige",
          boxShadow: 4
        }}
      >
        {/* <FullWidthTextField 
          id = {props.name} 
          name = {props.name}
        /> */}
        <form
          sx={{
            maxWidth: "100%"
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
              value={textRef.current.value}
              // onInput={(e) => {
              //   e.preventDefault();
              //   setTextRef(e.target.value);
              // }} // causes rerender
              inputRef={textRef}
            />
            <IconButton size="small" type="submit" onClick={showRefContent}>
              <AddIcon />
            </IconButton>
          </Stack>
        </form>

        {tasks[props.name].map((value) => {
          const labelId = `checkbox-list-label-${value}-${Math.random}`;

          return <ItemList id={labelId} value={value} labelId={labelId} />;
        })}
      </List>
    </>
  );
}
