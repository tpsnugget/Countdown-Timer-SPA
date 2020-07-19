import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ControlButtons = props => {

    const [oneXButton, setOneXButton] = useState(true)
    const [onePointFiveXButton, setOnePointFiveXButton] = useState(false)
    const [twoXButton, setTwoXButton] = useState(false)

    const runAtOneSpeed = async () => {
        await setOneXButton(true)
        await setOnePointFiveXButton(false)
        await setTwoXButton(false)
    }

    const runAtOnePointFiveSpeed = async () => {
        await setOneXButton(false)
        await setOnePointFiveXButton(true)
        await setTwoXButton(false)
    }

    const runAtTwoSpeed = async () => {
        await setOneXButton(false)
        await setOnePointFiveXButton(false)
        await setTwoXButton(true)
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

}

export default ControlButtons
