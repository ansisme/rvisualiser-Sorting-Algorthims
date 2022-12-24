import React, {useState, useEffect, createRef} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles';

const List=({isLoading,handleLength,len, handleAlgo,handleSpeed,speed,algo, sorting,generateRandomArray,handleSort,completed})=>{
    const classes = useStyles();
    return ( 
        <div className = {classes.container}>
            
            <div className='group speed'>
                        <label>Speed</label>
                        <input type='range' onChange={handleSpeed} min='1' max='10' value={Math.ceil(400 / speed)} disabled={sorting}></input>
                    </div>

                    <div className={classes.grouplength}>
                        <label>Length</label>
                        <input type='range' onChange={handleLength} min='5' max={150} step='1' disabled={sorting} value={len}></input>
                    </div>
            {
                
                isLoading ?(
                <div className = {classes.loading}>
                <CircularProgress size = "5rem" />
                </div>
            ) : ( <>
            <FormControl className = {classes.formControl}>
                    <InputLabel>Choose Sorting Method</InputLabel>
                    <Select >
                        <MenuItem value = "Merge Sort">Merge Sort</MenuItem>
                        <MenuItem value = "Insertion Sort">Insertion Sort</MenuItem>
                        <MenuItem value = "Bubble Sort">Bubble Sort</MenuItem>
                    </Select>
                   
            </FormControl>

            <FormControl> 
                <button onClick={generateRandomArray} disabled={sorting}>Randomize</button>
                <button onClick={handleSort} disabled={sorting || completed}>Sort</button>
             </FormControl>
            </>
            )};
        </div>
    );
}
export default List;