import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ControlButtons from '../Components/ControlButtons'

const TimerDisplay = props => {

    const { minute, start } = props

    const [halfway, setHalfway] = useState(0)
    const [pauseCount, setPauseCount] = useState(true)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [totalSec, setTotalSec] = useState(1)
    const [oneXButton, setOneXButton] = useState(true)
    const [onePointFiveXButton, setOnePointFiveXButton] = useState(false)
    const [twoXButton, setTwoXButton] = useState(false)
    
    useEffect( () => {
        if(start && sec === 0){
            console.log('start is true and sec === 0')
            setSec(59)
        }

        if(start && sec === 0){
            if(halfway === 0){
                console.log('halfway === 0')
                setPauseCount(false)
                setMin(minute - 1)
                setTotalSec(minute * 60)
                setHalfway(minute * 60 / 2)
            }
            // else if(){
            //     setMin(min - 1)
            //     console.log('set min to min - 1, min is', min)
            // }
        }

        if(!pauseCount && oneXButton){
            setTimeout( () => {
                setSec(sec - 1)
                setTotalSec(totalSec - 1)
                console.log('1X setTimeout and totalSec is ', totalSec)
            }, 1000 )
        }

        if(!pauseCount && onePointFiveXButton){
            setTimeout( () => {
                setSec(sec - 1)
                setTotalSec(totalSec - 1)
            }, 750 )
        }

        if(!pauseCount && twoXButton){
            setTimeout( () => {
                setSec(sec - 1)
                setTotalSec(totalSec - 1)
            }, 500 )
        }
    } )

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

    console.log('TimerDisplay Rendered and totalSec is ', totalSec)

    return (
        <Grid container justify='center' alignItems='center' style={{marginTop: '3rem'}} >
            <Grid container justify='center' item xs={12}>
                {(totalSec <= halfway) && (totalSec > 20) ?
                <Typography variant='h6' >
                    More than halfway there!
                </Typography>
                : null}
                {(totalSec <= halfway) && (totalSec <= 20) ?
                <Typography variant='h6' style={{color: 'red'}} >
                    More than halfway there!
                </Typography>
                : null}
            </Grid>
            <Grid container justify='center' alignItems='center'>
                {sec < 10 ?
                <Grid item xs={4}>
                    <Typography variant='h1'data-testid='Timerdisplay-time' >
                        0{min} : 0{sec}
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
                {pauseCount ?
                    <Button>
                        <PlayCircleOutlineIcon style={{fontSize: '4rem'}} onClick={() => {setPauseCount(false)}} />
                    </Button>
                    :
                    <Button data-testid='button' >
                        <PauseCircleOutlineIcon style={{fontSize: '4rem'}} onClick={() => {setPauseCount(true)}} />
                    </Button>
                }
                </Grid>
            </Grid>
            <ControlButtons oneXButton={oneXButton} onePointFiveXButton={onePointFiveXButton} twoXButton={twoXButton} runAtOne={runAtOneSpeed} runAtOnePointFive={runAtOnePointFiveSpeed} runAtTwo={runAtTwoSpeed} />
        </Grid>
    )
}

TimerDisplay.propTypes = {
    minute: PropTypes.number,
    moreThanHalfwayThere: PropTypes.bool,
}

export default TimerDisplay
