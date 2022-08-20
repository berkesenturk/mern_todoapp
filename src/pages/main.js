import * as React from "react";
import Grid from "@mui/material/Grid";
import CheckboxList from "../components/list";

export default function Main() {
  console.log("main worked");

  return (
    <Grid
      sx={{ flexGrow: 1 }}
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {Object.keys(taskData).map((board) => (
            <Grid key={board} sx={{ my: 30 }} item>
              <div>{board}</div>
              <CheckboxList
                id={Object.keys(taskData).indexOf(board)}
                name={board}
                tasks={taskData}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

const taskData = {
  "in-progress": ["task1", "task2", "task3", "task4"],
  todo: ["task5", "task6", "task7", "task8"],
  complete: ["task9", "task10", "task11", "task12"],
  "remaining-jobs": [
    "task list is not dynamic",
    "clean code make more readable",
    "add theme dark/light",
    "add loading on submit to add button"
  ]
};