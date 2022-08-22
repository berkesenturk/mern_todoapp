import * as React from "react";
import List from "@mui/material/List";
import ItemList from "../listitem";
// import FullWidthTextField from '../textRef';
// import { useTaskContext } from "../../contexts/TaskContext";
import { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

import { Stack } from "@mui/system";

export default function CheckboxList(props) {
  const [data, setData] = useState(props.tasks[props.name]);
  const [expand, setExpand] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    textRef.current.value = "";
  }, [data]);

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
              setData([...data, textRef.current.value]); // useReducer
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
              setData([...data, textRef.current.value]); // useReducer
            }}
          >
            <AddIcon />
          </IconButton>
        </Stack>

        {data.map((value) => {
          return (
            <ItemList
              id={`${props.name}-${data.indexOf(value)}`}
              value={value}
            />
          );
        })}
      </List>
    </>
  );
}
