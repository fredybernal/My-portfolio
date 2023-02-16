import {  makeStyles, } from '@material-ui/core';
import React from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import MyWork from './components/MyWork';
import Skills from './components/Skills';

const App = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Navbar />
        <About title="Acerca de mi " id="about" dark={true} />
        <Skills title="Mis skills" id="skills" dark={false} />
        <MyWork title="Mis trabajos" id="work" dark={true} />
        <Contact title="Contactame" id="contact" dark={false} />
      </div>
  )
}

const useStyles = makeStyles((theme) => ({

}))

export default App