import React from 'react';
import Header from './components/Header/Header';
import { Grid, Typography , CssBaseline} from '@material-ui/core';
import DrawerComponent from './components/Drawer/Drawer';
const App=()=>{
  return (
    <div>
    <Grid>
    <CssBaseline/>
        <Header/>
    </Grid>
      
      <Grid container spacing = { 3 } style = {{ width: '100%' } }>
        <Grid item xs = { 12 } md = { 4 }  >
          <DrawerComponent/>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;