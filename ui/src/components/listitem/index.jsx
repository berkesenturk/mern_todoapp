/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
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
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import ClickAwayListener from '@mui/base/ClickAwayListener';

// eslint-disable-next-line react/prop-types
function ItemList({
  isChecked,
  rating,
  isStar,
  id,
  labelId,
  title,
}) {
  const [checked, setChecked] = React.useState(isChecked);
  const [expand, setExpand] = React.useState(false);
  const [taskRating, setTaskRating] = React.useState(rating);
  const [starChecked, setStarChecked] = React.useState(isStar);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [test, setTest] = React.useState(false);
  const [label, setLabel] = React.useState('test-label');
  const [description, setDescription] = React.useState('lorem ipsum');

  const textRef = useRef();
  const labelRef = useRef();
  const descriptionRef = useRef();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLabelField() {
    setLabel(labelRef);
  }

  const open = Boolean(anchorEl);

  return (
    <>
      <ListItem
        key={labelId}
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
                setTest(!test);
                setChecked(!checked);
              }}
            />
            <Checkbox
              icon={<StarBorderRoundedIcon />}
              checkedIcon={<StarBorderRoundedIcon />}
              onClick={() => {
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
          <ListItemText id={id} primary={`${title}`} />
        </ListItemButton>
      </ListItem>
      <Collapse key={id} in={expand} timeout="auto" unmountOnExit>
        {test
          ? (
            <TableContainer>

              <Table sx={{ maxWidth: 400 }} aria-label="simple table">
                <tbody>
                  <TableRow>
                    <>
                      <TableCell variant="head">Description</TableCell>
                      <TableCell onClick={handleClick}>

                        <ClickAwayListener onClickAway={handleLabelField}>
                          <TextField
                            id="standard-basic"
                            label="Standard"
                            variant="standard"
                            placeholder="enter desc"
                            inputRef={descriptionRef}
                          />
                        </ClickAwayListener>
                      </TableCell>

                    </>
                  </TableRow>
                  <TableRow>
                    <>
                      <TableCell variant="head">Label</TableCell>
                      <TableCell>
                        <ClickAwayListener onClickAway={handleLabelField}>
                          <TextField
                            id="standard-basic"
                            label="Standard"
                            variant="standard"
                            placeholder="enter label"
                            inputRef={labelRef}
                            // onChange={handleLabelField}
                          />
                        </ClickAwayListener>
                      </TableCell>
                    </>
                  </TableRow>
                  <TableRow>
                    <>
                      <TableCell variant="head">Priority</TableCell>
                      <TableCell>
                        <Rating
                          name="simple-controlled"
                          value={taskRating}
                          // onChange={(event, newValue) => {
                          //   setTaskRating(newValue);
                          // }}
                        />
                      </TableCell>
                    </>
                  </TableRow>
                  <TableRow>
                    <>
                      <TableCell variant="head">Deadline</TableCell>
                      <TableCell>
                        <ClickAwayListener onClickAway={handleLabelField}>
                          <TextField
                            id="standard-basic"
                            label="Standard"
                            variant="standard"
                            placeholder="put datepicker here"
                            inputRef={labelRef}
                            // onChange={handleLabelField}
                          />
                        </ClickAwayListener>
                      </TableCell>
                    </>
                  </TableRow>
                </tbody>
              </Table>
            </TableContainer>
          )
          : (
            <TableContainer>
              <Table sx={{ maxWidth: 400 }} aria-label="simple table">
                <tbody>
                  <TableRow>
                    <>
                      <TableCell variant="head">Description</TableCell>
                      <TableCell onClick={handleClick}>{description}</TableCell>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <TextField
                          size="small"
                          variant="standard"
                          label="desc"
                          id={title}
                          name="task-edit"
                          inputRef={textRef}
                          onChange={() => setDescription(textRef)}
                        />
                      </Popover>
                    </>
                  </TableRow>
                  <TableRow>
                    <>
                      <TableCell variant="head">Label</TableCell>
                      <TableCell>{label}</TableCell>
                    </>
                  </TableRow>
                  <TableRow>
                    <>
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
                    </>
                  </TableRow>
                  <TableRow>
                    <>
                      <TableCell variant="head">Deadline</TableCell>
                      <TableCell>{new Date().toUTCString()}</TableCell>
                    </>
                  </TableRow>
                </tbody>
              </Table>
            </TableContainer>
          )}
      </Collapse>
    </>
  );
}

export default ItemList;
