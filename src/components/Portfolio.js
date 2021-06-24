import React from 'react'
import Navbar from './Navbar'
import {Box,Grid,Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import project1 from '../images/html-css-javascript-lg.jpg'
import back from '../back.jpg'
import TechSkills1 from './TechSkills'


const useStyles=makeStyles({
    mainContainer:{
        background:back,
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"5rem auto",
        border:"ridge #301b3f 0.2rem"
    }
});


const Portfolio = ()=> {
    const classes = useStyles();
    return (
        <div>
            <>
            <Box component="div" className={classes.mainContainer}>
                <Navbar/>
                <Grid container justify="center">
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 1" height="180" image={project1} />
                            <CardContent>
                                <Typography gutterBottom varient="h5">
                                    Project-1(The Helping Desk)
                                </Typography>
                                <Typography varient="body 2" color="textSecondary" component="p" >
                                    The project aims providing free resources for the students all over the country <br></br>
                                    with the latest avalible resources on Elecrtronics for college and Gate Pourpose.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://thehelpingdesk.codes/">Live</Button>
                            </CardActions>
                        </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 1" height="180" image={project1} />
                            <CardContent>
                                <Typography gutterBottom varient="h5">
                                    Project-2(Farewell Website)
                                </Typography>
                                <Typography varient="body 2" color="textSecondary" component="p">
                                    Giving a tribute to seniors for their immense love and support <br></br>
                                    Made a website using diffrent components such as card, corusel etc.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="http://bit.ly/TnPFarewell-2021">Live</Button>
                            </CardActions>
                        </CardActionArea>
                        </Card>
                    </Grid> 
                </Grid>
            </Box>
            <TechSkills1/>
            </>
        </div>
    )
}

export default Portfolio
