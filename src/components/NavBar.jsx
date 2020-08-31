import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { IconButton } from "@material-ui/core"


import GitHubIcon from "@material-ui/icons/GitHub"


const useStyles = makeStyles({
    icons: {
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'blue',
        }
    }
    ,
    toolbar: {
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex',
        height: '60px',
        position: 'fixed',
        top: 0,
        zIndex: '10'
    },
    toolbarTitle: {
        color: 'white'
    },
});

export default function NavBar(props) {
    const classes = useStyles();

    return (

        <div className={classes.toolbar}>


            <h2 className={classes.toolbarTitle}>  Diego Escobar Fusté</h2>

            <div>
                <a href="https://github.com/DiegoCuba" title='Personal GitHub'>
                    <IconButton className={classes.icons}>
                        <GitHubIcon />
                    </IconButton>
                </a>
            </div>


        </div>

    )
}


