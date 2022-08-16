import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import CheckboxList from '../components/list';


export default function Main() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };


  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} sx = {{my:30}} item>
              <div>kanban list</div>
              <CheckboxList />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
