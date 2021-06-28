import React from 'react'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'

const useStyles =makeStyles({
    particlesCanva:{
        position:"absolute",
        opacity:"0.6"
    }
})


const Home = () => {
    const classes=useStyles()
    return (
        <div>
           <Navbar/>
           <Header/>
           <Particles
           canvasClassName={classes.particlesCanva}
            params={{
                particles:{
                    number:{
                        value:120,
                        density:{
                            enable:true,
                            value_area:1000
                        }
                    },
                    shape:{
                        type:"circle",
                        strole:{
                            width:3,
                            color:'tomato'
                        }
                    },
                    size:{
                        value:5,
                        random:true,
                        anim:{
                            enable:true,
                            speed:1,
                            size_min:0.3,
                            sync:true
                        }
                    },
                    opacity:{
                        value:1,
                        random:true,
                        anim:{
                            enable:true,
                            speed:1,
                            opacity_min:0.1,
                            sync:true
                        }
                    }
                }
            }}
            />
        </div>
    )
}

export default Home
