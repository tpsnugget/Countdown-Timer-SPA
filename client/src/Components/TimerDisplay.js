import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const TimerDisplay = props => {

    const { min, moreThanHalfwayThere, pause, sec } = props

    return (
        <Grid container justify='center' alignItems='center' style={{marginTop: '3rem'}} >
            <Grid item xs={12}>
                {moreThanHalfwayThere ?
                <Typography variant='h6' >
                    More than halfway there!
                </Typography>
                : null}
            </Grid>
            <Grid container justify='center' alignItems='center'>
                {sec === 0 ?
                <Grid item xs={4}>
                    <Typography variant='h1'data-testid='Timerdisplay-time' >
                        {min} : 00
                    </Typography>
                </Grid>
                :
                <Grid item xs={4}>
                <Typography variant='h1'data-testid='Timerdisplay-time' >
                    {min} : {sec}
                </Typography>
                </Grid>
                }
                <Grid item xs={1}>
                {pause ?
                    <Button>
                        <PlayCircleOutlineIcon style={{fontSize: '4rem'}} />
                    </Button>
                    :
                    <Button data-testid='button' >
                        <PauseCircleOutlineIcon style={{fontSize: '4rem'}} />
                    </Button>
                }
                </Grid>
            </Grid>
        </Grid>
    )
}

TimerDisplay.propTypes = {
    min: PropTypes.number,
    moreThanHalfwayThere: PropTypes.bool,
    pause: PropTypes.bool,
    sec: PropTypes.number
}

export default TimerDisplay
