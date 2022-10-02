import * as React from 'react';
import Grid from '@mui/material/Grid';
import CheckboxList from '../components/list';

const taskData = {
  'in-progress': [
    {
      title: 'refactor everything: ****',
      isChecked: false,
      isStar: false,
      rating: 1,
    },
    {
      title: 'task1',
      isChecked: true,
      isStar: true,
      rating: 1,
    },
  ],
  todo: [
    {
      title: 'task5',
      isChecked: false,
      isStar: false,
      rating: 1,
    },
    {
      title: 'task6',
      isChecked: true,
      isStar: true,
      rating: 1,
    },
  ],
  complete: [
    {
      title: 'task7',
      isChecked: false,
      isStar: false,
      rating: 1,
    },
    {
      title: 'task8',
      isChecked: true,
      isStar: true,
      rating: 1,
    },
  ],
  backlog: [
    {
      title: 'task9',
      isChecked: false,
      isStar: false,
      rating: 1,
    },
    {
      title: 'task10',
      isChecked: true,
      isStar: true,
      rating: 1,
    },
  ],
};

export default function Main() {
  return (
    <Grid
      sx={{ flexGrow: 1 }}
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {
            Object.keys(taskData)
              .map((board) => (
                <Grid key={board} sx={{ my: 30 }} item>
                  <CheckboxList
                    id={Object.keys(taskData).indexOf(board)}
                    name={board}
                    tasks={taskData}
                  />
                </Grid>
              ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}
