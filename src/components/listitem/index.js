import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import hello from "../../../../public/hello.jpg";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";

function ItemList(props) {
  const [checked, setChecked] = React.useState([0]);
  const [expand, setExpand] = React.useState(false);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    console.log(expand);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

  return (
    <>
      <ListItem
        key={props.value}
        button
        secondaryAction={
          <>
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
        <ListItemButton
          sx={{ maxWidth: 2 }}
          onClick={handleToggle(props.value)}
        >
          <ListItemIcon>
            <Checkbox
              sx={{ maxWidth: 2 }}
              edge="start"
              checked={checked.indexOf(props.value) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": props.labelId }}
            />
          </ListItemIcon>
        </ListItemButton>
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
        {/* <div> hello mf </div>
        <img src={hello} width="100" height="100" alt="aasd"></img> */}
        <Stack direction="column" spacing={1}>
          Text1:
          <Chip
            sx={{ maxWidth: 150 }}
            label="Custom delete icon"
            deleteIcon={<DoneIcon />}
          />
          <Chip
            sx={{ maxWidth: 150 }}
            label="Custom delete icon"
            deleteIcon={<DoneIcon />}
          />
          <Chip
            sx={{ maxWidth: 150 }}
            label="Custom delete icon"
            deleteIcon={<DoneIcon />}
          />
          <Chip
            sx={{ maxWidth: 150 }}
            label="Custom delete icon"
            deleteIcon={<DoneIcon />}
          />
        </Stack>
      </Collapse>
      {/* https://codesandbox.io/s/material-demo-forked-6ppng1?file=/demo.js:1332-1343 */}
    </>
  );
}

const taskTableData = [
  { label: "red", deadline: Date.now(), description: "lorem ipsum" }
];

export default ItemList;
