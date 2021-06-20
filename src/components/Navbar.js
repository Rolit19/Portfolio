import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {AppBar,Toolbar,ListItem,IconButton,ListItemText,Avatar,Divider,List,Typography,Box, ListItemIcon, Slide, Slider} from '@material-ui/core'
import {ArrowBack,AssignmentInd,Home,Apps,ContactMail} from '@material-ui/icons'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import avatar from '../avatar1.png'
import { isCompositeComponent } from 'react-dom/test-utils';

//CSS Styles
const useStyles =makeStyles(theme=>({  
    menuSliderContainer: {
    width: 250,
    background: "#301b3f",
    height: "100%"
    },
    avatar:{
        display: "block",
        margin: "0.5rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color:"#e6e6fa"
    }
}));

const menuItems=[
    {
        listIcon:<Home/>,
        listText:"Home",
        ListPath:'/'
    },
    {
        listIcon:<AssignmentInd/>,
        listText:"Resume",
        ListPath:'/resume'
    },
    {
        listIcon:<Apps/>,
        listText:"Portfolio",
        ListPath:'/portfolio'
    },
    {
        listIcon:<ContactMail/>,
        listText:"Contacts",
        ListPath:'/contacts'
    }
]

const Navbar = () => {
    const [state, setstate] = useState({
        right:false
    })

    const toggleSlider= ((Slider , open)=>()=>{
        setstate({...state,[Slider]:open});
    });

    const classes=useStyles();
    const sideList=Slider =>(
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(Slider,false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Rolit Trivedi"/>
            <Divider/>
            <List>
                {menuItems.map((lsItem,key)=>(
                <ListItem button key={key} component={Link} to={lsItem.ListPath}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "black"}}>
                <Toolbar style={{background:"#301b3f"}}>
                    <IconButton  onClick={toggleSlider("right",true)}>
                        <ArrowBack style={{color: "#e6e6fa"}}/>
                    </IconButton>
                    <Typography style={{color:"#d8bfd8"}}>Rolit Trivedi</Typography>
                    <MobileRightMenuSlider anchor="right"  open={state.right} onClose={toggleSlider("right",false)}>
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
