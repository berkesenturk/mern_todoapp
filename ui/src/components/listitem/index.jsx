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
  const [checked, setChecked] = React.useState([0]);
  const [expand, setExpand] = React.useState(false);
  const [taskRating, setTaskRating] = React.useState(value.rating);

  console.log(value);

  const handleToggle = (valueInp) => () => {
    const currentIndex = checked.indexOf(valueInp);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(valueInp);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    console.log(expand);
  };

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
              checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
              onClick={handleToggle(value)}
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
                    setTaskRating(newValue);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Deadline</TableCell>
              <TableCell>{new Date().toUTCString()}</TableCell>
            </TableRow>

            {/* <TableBody> */}
            {/* {rows.map((row) => ( */}
            {/* <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                > */}
            {/* <TableCell>lorem ipsum</TableCell> */}
            {/* <TableCell>important</TableCell> */}
            {/* <TableCell>
                    <Rating
                      name="simple-controlled"
                      value={taskRating}
                      onChange={(event, newValue) => {
                        setTaskRating(newValue);
                      }}
                    />
                  </TableCell> */}
            {/* <TableCell>{new Date().toUTCString()}</TableCell> */}
            {/* </TableRow> */}
            {/* ))} */}
            {/* </TableBody> */}
          </Table>
        </TableContainer>
      </Collapse>
    </>
  );
}

export default ItemList;
