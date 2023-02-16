import { Card, CardActions, CardContent, Button, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import portada from "../images/portada.jpeg"
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../images/curriculum.pdf"


const About = ({ title, dark, id }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}  >
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={portada} className={classes.media} title="portada" />
                    <CardContent className={classes.cardcontent}>
                        <TypeWriterEffect
                            text="Hola mi nombre es Jhon Fredy Bernal Rojas"
                            textStyle={{ fontSize: "2rem", fontweight: "700px" }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <TypeWriterEffect
                            text="Soy un desarollador font end imprecionante "
                            textStyle={{ fontSize: "1.2rem", fontweight: "500px" }}
                            startDelay={5000}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                            Soy desarrollador web de bogota / colombia, disfruto mucho 
                            construyendo todo tipo de paginas web desde pequeños sitios 
                            hasta aplicaciones web interactivas.<br/>
                            <br/>
                            Si eres de una empresa o estas buscando personalan capacitado
                            puedes contactarme en la  seccion de contactos. <br/>
                            <br/>
                            Tambien podras descargar mi curriculum dandole click al boton 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                            <a href={pdf } download>
                            Mi Curriculum 
                            </a>
                        </Button>
                    </CardActions>
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
    },
    card: {
        background: "#FCE61F",
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
    },
    media: {
        width: "250px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            width: 3000
        },
    },
    cardcontent:{
        marginTop: theme.spacing(2),
        "& h6":{
            color:"#000",
            marginTop:theme.spacing(6),
            [theme.breakpoints.down("sm")]:{
                display:"none",
                
            },
        },
    },
    pdfbutton:{
        position: "absolute",
        bottom: "3rem",
        right:"2rem",
        backgroundColor:"#000",
        [theme.breakpoints.down("sm")]:{
            bottom: "1rem",
            right:"1rem",
        },
        padding: theme.spacing(2),
        "&:hover":{
            backgroundColor:"#fff",
        },
        "& a":{
            color:"#fff",
            textDecoration:"none",
            fontweight:900,
        },
        "& a:hover": {
            color:"#000",
        },

    }
}))


export default About