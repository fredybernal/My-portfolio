import { Box, makeStyles } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'

const StarRating = ({stars}) => {
    const classes = useStyles();
  return (
    <div>
        <Box component="Fieldset" className={classes.box}>
            <Rating name='read-only' readOnly value={stars }/> 
        </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    box:{
        borderColor: "transparent"
    }
}))

export default StarRating