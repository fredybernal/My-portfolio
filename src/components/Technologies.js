import React from 'react'
import html5 from "../images/html5.png"
import css from "../images/css.png"
import js from "../images/js.png"
import react from "../images/react.png"
import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import { TimelineItem, Timeline, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent } from '@material-ui/lab'
import StarRating from './StarRating'

const Technologies = () => {
    const classes = useStyles();

    const skillss = [
        {
            year: "2022",
            src: html5,
            title: "HTML 5",
            stars: 4,
        },
        {
            year: "2022",
            src: css,
            title: "CSS",
            stars: 4,
        },
        {
            year: "2022",
            src: js,
            title: "JS",
            stars: 3,
        },
        {
            year: "2023",
            src: react,
            title: "REACT",
            stars: 3,
        },
    ];


    return (
        <div className={classes.content}>
            <Card className={classes.skills}>
                <Timeline align="alternate" className={classes.aling}>
                    {
                        skillss.map(({ year, src, title, stars }, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent>
                                    <Typography className={classes.title} variant="h6" color="textSecondary">
                                        {year}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <img src={src} alt={title} className={classes.customlogo} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={6} className={classes.paper}>
                                        <Typography variant='h6' component="h1">
                                            {title}
                                        </Typography>
                                        <StarRating  className={classes.stars} stars={stars} />
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Card>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    customlogo: {
        width: "35px",
    },
    paper: {
        padding: "6px 40px",
        [theme.breakpoints.down("xs")]:{
            padding: 0,  
        },
    },
    skills: {
        background: "#000",
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
    },
    content: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    aling: {
        marginTop: "40px",
        width:"80%",

    },
    title:{
        color:"#fff"
    },
}))


export default Technologies