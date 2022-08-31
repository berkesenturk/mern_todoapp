import * as React from "react";
import Grid from "@mui/material/Grid";
import CheckboxList from "../components/list";
import { useTasks } from "../contexts/TaskContext";

export default function Main() {
  
  const [tasks, addTaskToList, removeTaskFromList] = useTasks()

  React.useEffect(() => {

  }, [tasks])

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
            Object.keys(tasks).map((board) => (
              <Grid key={board} sx={{ my: 30 }} item>
                <CheckboxList
                  id={Object.keys(tasks).indexOf(board)}
                  name={board}
                  tasks={tasks}
                />
              </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}