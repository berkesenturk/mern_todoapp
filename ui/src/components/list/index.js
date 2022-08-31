import { useState, useRef, useEffect, useContext } from "react";

import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Alert from "@mui/material/Alert";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import { Stack } from "@mui/system";

import FullWidthTextField from '../textinput';
import ItemList from "../listitem";
import { useTasks } from "../../contexts/TaskContext";


export default function CheckboxList(props) {
  const [tasks, addTaskToList, removeTaskFromList] = useTasks()
  const [taskState, setTaskState] = useState(tasks)


  useEffect(() => {
    // textRef.current.value = "";
    console.log("USEEFFECT WORKED, tasks changed");
  }, [tasks[props.name]]);

  return (
    <>
      <List
        id={props.name}
        sx={{
          width: "100%",
          my: 1,
          minWidth: 400,
          maxWidth: 500,
          bgcolor: "beige",
          boxShadow: 4
        }}
      >
        <ListItemText
          sx={{ my: 2, mx: 2 }}
          primary={props.name}
          primaryTypographyProps={{
            fontSize: 20,
            fontWeight: "medium",
            letterSpacing: 0
          }}
        />

        <FullWidthTextField 
          id = {props.name} 
          name = {props.name}
          // input = {textRef}
        />

        {
          tasks[props.name].map((value) => {
          return (
            <ItemList
              id={`${props.name}-${tasks[props.name].indexOf(value)}`}
              value={value}
            />
          );
        })}
      </List>
    </>
  );
}
