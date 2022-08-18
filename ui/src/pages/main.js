import * as React from 'react';
import Grid from '@mui/material/Grid';
import CheckboxList from '../components/list';
import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

export default function Main() {
  const taskList = useContext(TaskContext);
  
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {
            Object.keys(taskList).map((board) => ( 
            
            <Grid key={board} sx = {{my:30}} item>
              <div>{board}</div>
              
              <CheckboxList 
                id = { Object.keys(taskList).indexOf(board) } 
                name = { board } 
                />
            </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
