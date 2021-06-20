import React from 'react'
import '../css/contact.css'
import {makeStyles,withStyles} from '@material-ui/core/styles'
import {Typography,Button,Grid,Box} from '@material-ui/core'
import TextFeild from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import phonelogo from '../contactimg.jpeg'
 
const useStyles=makeStyles(theme=>({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    phone:{
        top:"30%",
        left:"30%",
        width:theme.spacing(30),
        height:theme.spacing(30),
        margin:theme.spacing(1),
        borderRadius:"40%",
        position:"absolute",
        boxShadow:"white"
    },
    form:{
        top:"50%",
        left:"65%",
        height:"400px",
        width:"400px",
        padding:"30px",
        borderRadius:"10%",
        transform:"translate(-50%,-50%)",
        position:"absolute",
        backgroundColor:"#301b3f",
        justify:"center",
        padding:"50px"
    },
    label:{
        width:"300px"
    },
    button:{
        width:"300px",
        borderColor:"black",
        backgroundColor:"#907fa4",
        color:"black",
        "&:hover":{
            borderColor:"black",
            backgroundColor:"#72147e",
            width:"300px",
            color:"black",
        }
    },
    text:{
        fontSize:"2rem",
        color:"#907fa4",

    }
}))

const InputFeild=withStyles({
    root:{
        "& label.Mui-focused":{
            color:"#907fa4",
        },
        "& label":{
            color:"#907fa4",
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"#907fa4",
            },
            "&:hover fieldset":{
                borderColor:"#907fa4"
            }
        },
    },
})(TextFeild);

const Contacts=()=> {
    const classes=useStyles();
    return (
        <>
        <Navbar />
        <Particles />
        <Particles />
        <div>
            <Grid container justify='center'  >
                <Grid component='form' item lg={6} className={classes.form}>
                    <Typography className={classes.text}>
                        CONTACT ME <PersonAddIcon/>
                    </Typography>
                    <InputFeild fullWidth={true} label="Name" variant="outlined" className={classes.label} inputProps={{style:{color:"white"}}} margin="dense" size="medium"/><br/>
                    <InputFeild fullWidth={true} label="Email" variant="outlined" className={classes.label} inputProps={{style:{color:"white"}}} margin="dense" size="medium"/><br/>
                    <InputFeild fullWidth={true} label="Company Name" variant="outlined" className={classes.label} inputProps={{style:{color:"white"}}} margin="dense" size="medium"/><br/>
                    <br></br>
                    <Button variant="outlined" className={classes.button} fullWidth={true} endIcon={<SendIcon/>}>Contact Me</Button>
                </Grid>
                <Grid item lg={6}>
                    <img src={phonelogo} className={classes.phone}/> 

                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default Contacts
