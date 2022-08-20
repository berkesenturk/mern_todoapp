import * as React from "react";
import Grid from "@mui/material/Grid";
import CheckboxList from "../components/list";
// import { useContext } from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { useEffect } from "react";

export default function Main() {
  const { tasks } = useTaskContext();

  useEffect(() => {
    console.log("useffect worked on main comp");
  }, [tasks]);

  return (
    <Grid
      sx={{ flexGrow: 1 }}
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {Object.keys(tasks).map((board) => (
            <Grid key={board} sx={{ my: 30 }} item>
              <div>{board}</div>

              <CheckboxList
                id={Object.keys(tasks).indexOf(board)}
                name={board}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
