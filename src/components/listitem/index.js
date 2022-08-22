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

    setExpand(!expand);
    console.log(expand);
  };

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
        <ListItemButton sx={{}}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(props.value) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": props.labelId }}
            />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton
          role={undefined}
          onClick={handleToggle(props.value)}
          dense
        >
          <ListItemText id={props.id} primary={`${props.value}`} />
        </ListItemButton>
      </ListItem>
      <Collapse key={props.id} in={expand} timeout="auto" unmountOnExit>
        <div> hello mf </div>
        <img src={hello} width="100" height="100" alt="aasd"></img>
      </Collapse>
      {/* https://codesandbox.io/s/material-demo-forked-6ppng1?file=/demo.js:1332-1343 */}
    </>
  );
}

export default ItemList;
