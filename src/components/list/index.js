import * as React from "react";
import List from "@mui/material/List";
import ItemList from "../listitem";
// import FullWidthTextField from '../textRef';
// import { useTaskContext } from "../../contexts/TaskContext";
import { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { Stack } from "@mui/system";

export default function CheckboxList(props) {
  const [data, setData] = useState(props.tasks[props.name]);
  const [board, setBoard] = useState(props.name);
  const textRef = useRef();

  useEffect(() => {}, [data]);

  useEffect(() => {
    // setData(props.tasks[props.name]);
    console.log("data -->", data);
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
          />
          <IconButton
            size="small"
            type="submit"
            onClick={() => {
              // console.log(typeof data, data);
              setData([...data, textRef.current.value]);
            }}
          >
            <AddIcon />
          </IconButton>
        </Stack>

        {data.map((value) => {
          const labelId = `checkbox-list-label-${value}-${Math.random}`;

          return <ItemList id={labelId} value={value} labelId={labelId} />;
        })}
      </List>
    </>
  );
}
