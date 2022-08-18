import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function ItemList(props) {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    
  return (
    <ListItem
    key={props.value}
    secondaryAction={
      <IconButton edge="end" aria-label="comments">
        <DeleteIcon  />
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton role={undefined} onClick={handleToggle(props.value)} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked.indexOf(props.value) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': props.labelId }}
        />
      </ListItemIcon>
      <ListItemText id={props.labelId} primary={`Line item ${props.value}`} />
    </ListItemButton>
  </ListItem>
  )
}

export default ItemList