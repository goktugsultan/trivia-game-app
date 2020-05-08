import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';
import sad from '../components/logo/sad.svg'
import happy from '../components/logo/people.svg'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));
function Score({ score }) {
    const classes = useStyles();
    return (
        <div className="score-menu">
            <div className="score-logo">
                <img style={{ width: '20%', height: '70%' }} src={score > 5 ? happy : sad} />
            </div>
            <div className="score-text">
                <h3>Score : {score}</h3>
            </div>
            <div className="score-again-button">
                <Link to="/category" style={{ textDecoration: 'none' }} >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<LoopIcon />}
                    >
                        PLAY AGAIN
                        </Button>
                </Link>
            </div>
        </div>
    )
}


export default Score




{/* <Link to="/category" style={{ textDecoration: 'none' }} >
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<LocalPlayIcon />}
                        >
                            PLAY AGAIN
                        </Button>
                    </Link> */}