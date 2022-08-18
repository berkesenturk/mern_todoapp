import * as React from 'react';
import List from '@mui/material/List';
import ItemList from '../listitem';
// import FullWidthTextField from '../textinput';
import { TaskContext } from '../../contexts/TaskContext';
import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';

import AddIcon from '@mui/icons-material/Add';
import IconButton  from '@mui/material/IconButton';

import { Stack } from '@mui/system';

export default function CheckboxList(props) {
  
  const { taskData, setTaskData } = useContext(TaskContext) 
  
  const [textInput, setTextInput] = useState('');

  const [state, dispatch] = React.useReducer(reducer, { taskData: taskData } )
  
  console.log(taskData);
  
  console.log("STATE: ", state.taskList);

  function reducer(state, action) {
    switch (action.type) {
      case 'task-reduce':
        return setTaskData(state.taskData[props.name].push(textInput)) // taskList
      default:
        throw new Error("sth went wrong with reducer");
    }
  }

  return (
    <>
      <List 
        sx={{ 
            width: '100%', 
            my:1 , 
            maxWidth: 360, 
            bgcolor: 'beige', 
            boxShadow: 4
          }}
      > 
    
         {/* <FullWidthTextField 
          id = {props.name} 
          name = {props.name}
        /> */}
         <form
          sx={{
            maxWidth: '100%',
          }}
          onSubmit={() => dispatch({type: 'decrement'})}
        >
          <Stack
            direction="row" 
          >
            <TextField 
              sx = {{ 
                mx:2
              }} 
              variant='standard'
              label="Task" 
              id="fullWidth" 
              name= "task-input" 
              width ='100%'
              value= {textInput}
              onInput = { e => setTextInput(e.target.value) }
            />
            <IconButton
                size= "small"
                type='submit'
                >
              <AddIcon /> 
            </IconButton>
          </Stack>
          
        </form>
      
        
        {
          state.taskData[props.name].map((value) => {
            
            const labelId = `checkbox-list-label-${value}`;
            
            return (
              <ItemList id={labelId} value = {value} labelId= {labelId}/> 
            )
          })
        }

        
      </List>
    </>
  );
}
