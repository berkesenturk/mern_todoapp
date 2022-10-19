import * as React from 'react';
import List from '@mui/material/List';
import { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/system';
import ItemList from '../listitem';

// eslint-disable-next-line react/prop-types
export default function CheckboxList({ name, tasks }) {
  const [data, setData] = useState(tasks[name]);
  const [inputAlert, setInputAlert] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    textRef.current.value = '';
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setInputAlert(false);
    }, 5000);
  });

  const handleSubmit = () => {
    const newData = {
      title: textRef.current.value,
      isChecked: false,
      isStar: false,
      rating: 1,
    };

    setData([...data, newData]);
    setInputAlert(true);
  };

  return (
    <>
      <List
        id={name}
        sx={{
          width: '100%',
          my: 1,
          minWidth: 400,
          maxWidth: 500,
          bgcolor: 'beige',
          boxShadow: 4,
        }}
      >
        <ListItemText
          sx={{ my: 2, mx: 2 }}
          primary={name}
          primaryTypographyProps={{
            fontSize: 20,
            fontWeight: 'medium',
            letterSpacing: 0,
          }}
        />

        <Stack direction="row">
          <TextField
            sx={{
              mx: 2,
              my: 2,
              minWidth: 330,
              maxWidth: 500,
            }}
            variant="standard"
            label="Task"
            id="fullWidth"
            name="task-input"
            width="100%"
            inputRef={textRef}
            onSubmit={
              handleSubmit
              // useReducer
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(); // useReducer
              }
            }}
          />
          <IconButton
            size="small"
            type="submit"
            onClick={handleSubmit}
          >
            <AddIcon />
          </IconButton>
        </Stack>
        {data.map((value) => (
          <ItemList
            id={`${name}-${data.indexOf(value)}`}
            isChecked={value.isChecked}
            rating={value.rating}
            isStar={value.isStar}
            labelId={`${name}-${data.indexOf(value)}`}
            title={value.title}
          />
        ))}
      </List>
      <Collapse in={inputAlert}>
        <Alert
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setInputAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )}
          sx={{ mb: 2 }}
        >
          Task Saved!
        </Alert>
      </Collapse>
    </>
  );
}
