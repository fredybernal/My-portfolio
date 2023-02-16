import { makeStyles,  Typography, Card, Grid } from '@material-ui/core';
import React from 'react'


const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}  >
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.cardpadre}>
          <Grid container className={classes.grid}>
            <Card className={classes.card}>
              <Typography className={classes.nombre}>Contactos</Typography>
              <Typography className={classes.nombre}>Telefono: 3213435426</Typography>
              <Typography className={classes.nombre}>                                  E-mail: jhonbernal542@gmail.com</Typography>
              <Typography className={classes.nombre}>Localizacion: Bogota D.C/ Colombia</Typography>
            </Card>
          </Grid>
        </Card>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    background:"#FCE61F",
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#000000",
    color: "#fff"
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
    padding: theme.spacing(),
  },
  card: {
    background: "#FCE61F",
    width: "100%",
    minHeight: "60vh",
    margin: theme.spacing(3)
  },
  nombre: {
    fontWeight: "bold",
    color: "#000",
    marginTop: 50,
    marginLeft: 10,
    fontSize: "35px",
    [theme.breakpoints.down("xs")]:{
      fontSize:"15px"
  },
  },
  cardpadre: {
    marginTop: theme.spacing(6),
    background: "#000"
  }
}))

/*const Contact = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}  >
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.cardpadre}>
          <Card className={classes.card}>
          <Paper className={classes.root}>
            <div className={classes.titleandchoices}>
              <Typography variant="h2">Contactame</Typography>
              <Typography variant="3">Telefono:3213435426</Typography>
              <Typography variant="3">E-mail: jhonbernal542@gmail.com</Typography>
              <Typography variant="3">Localizacion: Bogota D.C/ Colombia</Typography>
            </div>
          </Paper>
          </Card>
        </Card>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    background: "#FCE61F",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "flex-start",
    justifyContent: "center",
    alignItems: "center"
  },
  sectiondark: {
    background: "#000000",
    color: "#fff",
  },
  titleandchoices:{
    display:"flex",
    flexDirection:"column",

    "& h3":{
      marginTop: theme.spacing(5)
    }
  },
  root: {
    marginTop: theme.spacing(5),
    background: "#FCE61F",
    color: "#000",
    fontSize: "1.4rem",
    maxWidth: "1500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(3),
  },
  sectioncontent: {
    maxWidth: "80vw"
  },
  cardpadre:{
    marginTop: theme.spacing(6),
    background: "#000"
},
card: {
  background: "#000",
  maxWidth: 500,
  minHeight: 275,
  margin: theme.spacing(5)
},

}))*/

export default Contact