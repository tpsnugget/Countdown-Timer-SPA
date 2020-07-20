import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ControlButtons = props => {

    console.log('ControlButtons Rendered')

    const { oneXButton, onePointFiveXButton, twoXButton, runAtOne, runAtOnePointFive, runAtTwo } = props

    const runAtOneSpeed = () => {
        runAtOne()
    }

    const runAtOnePointFiveSpeed = () => {
        runAtOnePointFive()
    }

    const runAtTwoSpeed = () => {
        runAtTwo()
    }

    return (
        <Grid container justify='center' style={{marginTop: '3rem'}}>
            <Grid item xs={12} md={2} style={{marginBottom: '1rem'}}>
                {oneXButton ?
                    <Button data-testid='ControlButtons-oneX' variant="contained" color="primary" style={{width: '150px'}} >
                        <Typography variant='h4'>
                            1X
                        </Typography>
                    </Button>
                    :
                    <Button variant="contained" style={{width: '150px'}} onClick={runAtOneSpeed} >
                        <Typography variant='h4'>
                            1X
                        </Typography>
                    </Button>
                }
            </Grid>
            <Grid item xs={12} md={2} style={{marginBottom: '1rem'}}>
                {onePointFiveXButton ?
                    <Button variant="contained" color="primary" style={{width: '150px'}} >
                        <Typography variant='h4'>
                            1.5X
                        </Typography>
                    </Button>
                    :
                    <Button data-testid='ControlButtons-onePointFiveX' variant="contained" style={{width: '150px'}} onClick={runAtOnePointFiveSpeed} >
                        <Typography variant='h4'>
                            1.5X
                        </Typography>
                    </Button>
                }
            </Grid>
            <Grid item xs={12} md={2}>
                {twoXButton ?
                    <Button variant="contained" color="primary" style={{width: '150px'}} >
                        <Typography variant='h4'>
                            2X
                        </Typography>
                    </Button>
                    :
                    <Button data-testid='ControlButtons-twoX' variant="contained" style={{width: '150px'}} onClick={runAtTwoSpeed} >
                        <Typography variant='h4'>
                            2X
                        </Typography>
                    </Button>
                }
            </Grid>
        </Grid>
    )
}

ControlButtons.propTypes = {
    oneXButton: PropTypes.bool,
    onePointFiveXButton: PropTypes.bool,
    twoXButton: PropTypes.bool,
    runAtOne: PropTypes.func,
    runAtOnePointFive: PropTypes.func,
    runAtTwo: PropTypes.func
}

export default ControlButtons
