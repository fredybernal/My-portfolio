import { Card, CardContent, Link, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import mockData from '../MockData';

const MyWork = ({ title, dark, id }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}  >
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.cardpadre}>
                    <Grid container className={classes.grid}>
                        {
                            mockData.map(({ title, image, git, netlify, linkGit, linkNetlify }, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia image={image} className={classes.caratula} titulo="proyectos" />
                                        <CardContent>
                                            <Typography className={classes.nombre}>
                                                {title}
                                            </Typography>
                                            <Link href={linkNetlify} color="primary" target="_blank" rel="noopener noreferrer">
                                                {netlify}
                                            </Link>
                                            <div>
                                                <Link href={linkGit} color="primary" target="_blank" rel="noopener noreferrer">
                                                    {git}
                                                </Link>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Card>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectiondark: {
        background: "#000000",
        color: "#fff"
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        padding: theme.spacing(2),
    },
    grid: {
        marginTop: theme.spacing(10),
    },
    card: {
        background: "#000",
        maxWidth: 345,
        minHeight: 275,
        margin: theme.spacing(3)
    },
    caratula: {
        height: 0,
        paddingTop: "56.25%",//16:9
    },
    nombre: {
        color: "#fff",
        marginTop: 0,
        fontSize: "25px"
    },
    cardpadre:{
        marginTop: theme.spacing(6),
        background: "#FCE61F"
    }
}))

export default MyWork