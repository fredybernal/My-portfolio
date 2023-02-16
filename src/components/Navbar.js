import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import logo from "../images/logo.png"
import { Link, animateScroll as scroll } from 'react-scroll'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone'
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone'
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import CancelIcon from '@material-ui/icons/Cancel'

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const links = [
    {
      id: "about",
      text: "Acerca de mi",
      icon: <InfoTwoToneIcon fontSize='large' color='#000'/>
    },
    {
      id: "skills",
      text: "Mis skills",
      icon: <EmojiObjectsTwoToneIcon fontSize='large' color='#000'/>
    },
    {
      id: "work",
      text: "Mis trabajos",
      icon: <BuildTwoToneIcon fontSize='large' color='#000'/>
    },
    {
      id: "contact",
      text: "Contactame",
      icon: <ContactMailTwoToneIcon fontSize='large' color='#000'/>
    },
  ]
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt="logo" />
          <List className={classes.menu}>
            {
              links.map(({ id, text }, index) => (
                <Link key={index}
                  to={id}
                  spy={true}
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  offset={-70}>{text}</Link>
              ))
            }
          </List>
          <IconButton edge="end" className={classes.menubutton} onClick={() => setOpen(!open)}>
            <MenuIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)} >
        <IconButton onClick={() => setOpen(false)} className={classes.CancelIcon}>
          <CancelIcon fontSize='large' />
        </IconButton>
        <Divider />
        {
          links.map(({ id, text, icon }, index) => (
            <Link key={index}
              className={classes.sidebar}
              to={id}
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              offset={-70}>
              <ListItem component="h5">
                <span>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                </span>{text}
              </ListItem></Link>
          ))
        }
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FCE61F",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "felx",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "3rem",
    objectfit: "contain",
    "&:hover": {
      cursor: "pointer"
    }
  },
  menu: {
    
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    "& a": {
      color: "#000000",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3)
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#FFf",
      borderBottom: "3px solid #Fff"
    }
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#000",
      position: "absolute",
      top: 0,
      right: 10,
    }
  },
  CancelIcon:{
    color:"#000",
  },
  sidebar: {
    background:"#FCE61F", 
    height:"100vh",
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vw"
    },
    "& h5":{
      margin: theme.spacing(5, 0, 0, 2),
      fontSize: "1.4rem",
      color: "#000",
      fontWeight:"bold",
    },
    "& h5:hover":{
      color: "#fff",
      cursor: "pointer",
      borderBottom: "3px solid #Fff"
    }
  }

}))

export default Navbar