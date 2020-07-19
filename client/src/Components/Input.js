import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Input = props => {

    const { setTime, startTimer, time } = props

    const sendBackStartTimer = () => {
        startTimer()
    }

    const sendTimeToCountdownTimer = (e) => {
        setTime(e.target.value)
    }

    return (
        <Grid container justify='center' alignItems='center' spacing={5}>
            <Grid item xs={12} md={2}>
                <Typography variant='h4' data-testid='Input-countdown-text'>
                    Countdown:
                </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
                <TextField data-testid='Input-textfield-input' label="(Min)" variant="outlined" onChange={sendTimeToCountdownTimer} >

                </TextField>
            </Grid>
            <Grid item xs={12} md={2}>
                {time >= 1 ?
                    <Button variant="contained" color="primary" >
                        <Typography variant='h4' >
                            START
                        </Typography>
                    </Button>
                    :
                    <Button variant="contained" data-testid='button' disabled onClick={sendBackStartTimer} >
                        <Typography variant='h4' >
                            START
                        </Typography>
                    </Button>

                }
            </Grid>
        </Grid>
    )
}

Input.propTypes = {
    setTime: PropTypes.func,
    startTimer: PropTypes.func,
    time: PropTypes.number
}

export default Input
