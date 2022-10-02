/* eslint-disable react/prop-types */
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Collapse from '@mui/material/Collapse';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Rating from '@mui/material/Rating';

// import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import DateTimePicker from "@mui/material/DateTimePicker";

// eslint-disable-next-line react/prop-types
function ItemList({ value, id, labelId }) {
  const [checked, setChecked] = React.useState(value.isChecked);
  const [expand, setExpand] = React.useState(false);
  const [taskRating, setTaskRating] = React.useState(value.rating);
  const [starChecked, setStarChecked] = React.useState(value.isStar);

  return (
    <>
      <ListItem
        key={value}
        button
        secondaryAction={(
          <>
            <Checkbox
              sx={{ maxWidth: 1 }}
              edge="start"
              checked={checked}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
              onClick={() => {
                // eslint-disable-next-line no-param-reassign
                value.isChecked = !checked;
                setChecked(!checked);
              }}
            />
            <Checkbox
              icon={<StarBorderRoundedIcon />}
              checkedIcon={<StarBorderRoundedIcon />}
              onClick={() => {
                // eslint-disable-next-line no-param-reassign
                value.isStar = !starChecked;
                setStarChecked(!starChecked);
              }}
            />
            <IconButton edge="end" aria-label="comments">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="comments">
              <DeleteIcon />
            </IconButton>
          </>
        )}
        disablePadding
      >
        <ListItemButton
          sx={{ minWidth: 10 }}
          role={undefined}
          onClick={() => {
            setExpand(!expand);
          }}
          dense
        >
          <ListItemText id={id} primary={`${value.title}`} />
        </ListItemButton>
      </ListItem>
      <Collapse key={id} in={expand} timeout="auto" unmountOnExit>
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
                    // eslint-disable-next-line no-param-reassign
                    value.rating = newValue;
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
