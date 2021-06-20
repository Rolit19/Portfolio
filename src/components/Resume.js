import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography,Box} from '@material-ui/core'
import Navbar from './Navbar'
import Particles from './particles'
import back from '../back.jpg'

const useStyles=makeStyles(theme=>({
    mainContainer:{
        background:back,
        opacity:"100%"
    },
    timeline:{
        position:"relative",
        padding:'1rem',
        margin: "0 auto",
        "&:before":{
            content:"''",
            position:"absolute",
            height:"100%",
            border:"1px solid tan",
            right:"40px",
            top: 0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
    },
    timelineItem: {
        padding: "1rem",
        borderBottom: "2px solid rgb(241, 142, 241)",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before":{
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#301b3f #301b3f transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width:"44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "rgb(241, 142, 241)"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #301b3f #301b3f"
            }
        }     
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth:'9.375rem',
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"#301b3f",
        color:"white",
        lineHeight:1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display:"none",
            }
        }
    },
    heading:{
        color:"#d8bfd8",
        padding:"3rem 0",
        textTransform:"uppercase",
        fontSize:"2.5rem"
    } ,
    subHeading:{
        color:"white",
        textTransform:"uppercase",
        padding:"0",
        fontSize:"1.5rem"
    } 
}));


const Resume = () => {
    const classes=useStyles()
    return (
        <>
        <Navbar />
        <Box component="header" className={classes.mainContainer}>
            <Typography varient="h4" align="center" className={classes.heading}>
                Working Experience
            </Typography>
            <Box component="div" className={classes.timeline}>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timelineItem}`}>
                    CURRENT
                </Typography>
                <Box component="div" className={classes.timelineItem}>
                    <Typography variant="h5" aligh="center" className={classes.subHeading}>
                        Web Design
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color:"tomato"}}>
                        Currently Working On
                    </Typography>
                    <Typography variant="subtitle1" aligh="center" style={{color:"tan"}}>
                        Latest Tecnologies Which include HTML,CSS+Bootstrap,JavaScript,ReactJS.
                    </Typography>
                </Box>

                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timelineItem}`}>
                    Mar'2021
                </Typography>
                <Box component="div" className={classes.timelineItem}>
                    <Typography variant="h5" aligh="center" className={classes.subHeading}>
                        My Project
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color:"tomato"}}>
                        The Helping Desk
                    </Typography>
                    <Typography variant="subtitle1" aligh="center" style={{color:"tan"}}>
                        It aims to provide free resources to all EnTC students.
                        Made with HTML,CSS and JavaScript.
                        It is made Fully Responsive and uses Latest Technologies.<br></br>
                        URL: <a href="https://thehelpingdesk.codes/">The Helping Desk</a>
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timelineItem}`}>
                    Feb'2021
                </Typography>
                <Box component="div" className={classes.timelineItem}>
                    <Typography variant="h5" aligh="center" className={classes.subHeading}>
                        Codejam and HashCode
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color:"tomato"}}>
                        HashCode AIR 173 and Global Rank 1103
                    </Typography>
                    <Typography variant="subtitle1" aligh="center" style={{color:"tan"}}>
                        HashCode was a completely diffrent experience and my first team Hackathon.
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color:"tomato"}}>
                        Codejam Qualification Qualified with 41 points
                    </Typography>
                    <Typography variant="subtitle1" aligh="center" style={{color:"tan"}}>
                        CodeJam has an entirely diffrent and problem are of good quality.
                    </Typography>
                </Box>
                <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timelineItem}`}>
                    Platforms
                </Typography>
                <Box component="div" className={classes.timelineItem}>
                    <Typography variant="h5" aligh="center" className={classes.subHeading}>
                        Online Platforms
                    </Typography>
                    <Typography variant="subtitle1" aligh="center" style={{color:"tan"}}>
                        GeekForGeeks : Institute rank #79<br></br>
                        CodeChef : 3 Star Max Rating:1605<br></br>
                        Leetcode : 2 Star<br></br>
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Resume
 