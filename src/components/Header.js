import React from 'react'
import '../App.css';
import {Typography,Avatar,Grid,Box} from '@material-ui/core'
import {makeStyles, responsiveFontSizes} from '@material-ui/core/styles'
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
        fontSize:"2.5rem",
    },
    subtitle:{
        color:"white",
        fontSize:"1.5rem",
        marginBottom:"3rem"
    },
    typedcontainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
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
        <Box className={classes.typedcontainer}>
            <Grid container justify="center">
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
                    strings={['Web Devolpment', 'Competative Programing']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>
            <Platforms />
        </Box>
                    
        </>
    )
}

export default Header
