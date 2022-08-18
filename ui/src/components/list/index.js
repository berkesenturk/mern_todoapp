import * as React from 'react';
import List from '@mui/material/List';
import ItemList from '../listitem';
import FullWidthTextField from '../textinput';
import { TaskContext } from '../../contexts/TaskContext';
import { useContext } from 'react';

export default function CheckboxList(props) {
  const taskList = useContext(TaskContext);
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
        
        <FullWidthTextField 
          id = {props.name} 
          name = {props.name}
        />

        {taskList[props.name].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          
          return (
              <ItemList id={labelId} value = {value} labelId= {labelId}/>  
          )
        })}
      </List>
    </>
  );
}
