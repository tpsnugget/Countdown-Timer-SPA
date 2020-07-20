import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Input from '../Components/Input'
import TimerDisplay from '../Components/TimerDisplay'

export default class CountdownTimer extends Component {

    state = {
        minute: 0,
        msec: 0,
        // pause: true,
        moreThanHalfwayThere: false,
        runAtOneXSpeed: true,
        runAtOnePointFiveXSpeed: false,
        runAtTwoXSpeed: false,
        // seconds: 0,
        start: false,
        time: 0,
        totalSec: 0
    }

    setTime = (value) => {
        this.setState({
            minute: Number(value),
            time: Number(value),
            totalSec: Number(value) * 60
        })
    }

    startTimer = () => {
        this.setState({
            minute: this.state.minute,
            pause: false,
            seconds: 59,
            start: true,
            totalSec: this.state.totalSec - 1
        })
        
    }

    render() {

        const { minute, moreThanHalfwayThere, start, time } = this.state
        console.log('CountdownTimer Rendered')

        return (
            <Box style={{marginTop: '15rem'}} >
                <Container >
                    <Input setTime={this.setTime} time={time} startTimer={this.startTimer} />
                    <TimerDisplay minute={minute} moreThanHalfwayThere={moreThanHalfwayThere} start={start}  />
                </Container>
            </Box>
        )
    }
}
