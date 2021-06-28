import React from 'react'
import '../App.css';
import {Typography,Avatar,Grid,Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import avatar from '../avatar.jpg'
import Typed from 'react-typed'
import Platforms from './button';


const useStyles = makeStyles(theme =>({
    avatar:{
        width:theme.spacing(30),
        height:theme.spacing(30),
        margin:theme.spacing(1)
    },
    title:{
        color:"#9932cc",
        fontSize:"3rem",
        fontWeight:"bold",
        fontFamily: 'Big Shoulders Stencil Display'
    },
    subtitle:{
        color:"white",
        fontSize:"2.5rem",
        marginBottom:"3rem",
        fontWeight:"bold",
        fontFamily: 'Big Shoulders Stencil Display',
    },
    typedcontainer:{
        position:"absolute",
        top:"60%",
        left:"49%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}));



const Header = () => {
    const classes=useStyles()
    return (
        <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display&display=swap');
        </style>
        <Box className={classes.typedcontainer}>
            <Grid container justify="center" >
                <Avatar className={classes.avatar} src={avatar} alt="Rolit Trivedi" />
            </Grid>
            <Typography className={classes.title}>
            <Typed
                    strings={['Rolit Trivedi']}
                    typeSpeed={40}
                />
            </Typography>
            <Typography className={classes.subtitle}>
            <Typed
                    strings={['Web Developer', 'Competitive Programer','Open Source Contributor']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
            </Typography>
            <Platforms />
        </Box>
                    
        </>
    )
}

export default Header
