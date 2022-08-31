import React from "react";
import { useEffect, useState } from "react";
import { useTasks } from "../../contexts/TaskContext";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table"
import TableRow from "@mui/material/TableRow"
import Rating from "@mui/material/Rating"

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";


function ItemList(props) {
  const [checked, setChecked] = React.useState([0]);
  const [expand, setExpand] = React.useState(false);
  const [taskRating, setTaskRating] = React.useState(2);
  const [tasks, addTaskToList, removeTaskFromList] = useTasks()



  useEffect(() => {
    // textRef.current.value = "";
    console.log("USEEFFECT WORKED, tasks changed");
  }, [tasks[props.name]]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } 
    else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    console.log(expand);
  };


  return (
    <>
      <ListItem
        key={props.value}
        button
        secondaryAction={
          <>
            <Checkbox
              sx={{ maxWidth: 1 }}
              edge="start"
              checked={checked.indexOf(props.value) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": props.labelId }}
              onClick={handleToggle(props.value)}
            />
            <Checkbox
              icon={<StarBorderRoundedIcon />}
              checkedIcon={<StarBorderRoundedIcon />}
            />
            <IconButton edge="end" aria-label="comments">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="comments">
              <DeleteIcon />
            </IconButton>
          </>
        }
        disablePadding
      >
        {/* <ListItemButton
          sx={{ maxWidth: 2 }}
          onClick={handleToggle(props.value)}
        >
          <ListItemIcon>
            <Checkbox
              sx={{ maxWidth: 1 }}
              edge="start"
              checked={checked.indexOf(props.value) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": props.labelId }}
            />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ maxWidth: 1 }}>
          <StarBorderRoundedIcon />
        </ListItemButton> */}
        <ListItemButton
          sx={{ minWidth: 10 }}
          role={undefined}
          onClick={() => {
            setExpand(!expand);
          }}
          dense
        >
          <ListItemText id={props.id} primary={`${props.value}`} />
        </ListItemButton>
      </ListItem>

      <Collapse key={props.id} in={expand} timeout="auto" unmountOnExit>
        <TableContainer>
          <Table sx={{ maxWidth: 400 }} aria-label="simple table">
            <TableRow>
              <TableCell variant="head">Description</TableCell>
              <TableCell>lorem ipsum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Label</TableCell>
              <TableCell>sport</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Priority</TableCell>
              <TableCell>
                <Rating
                  name="simple-controlled"
                  value={taskRating}
                  onChange={(event, newValue) => {
                    setTaskRating(newValue);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Deadline</TableCell>
              <TableCell>{new Date().toUTCString()}</TableCell>
            </TableRow>

          </Table>
        </TableContainer>
      </Collapse>
    </>
  );
}

export default ItemList;
