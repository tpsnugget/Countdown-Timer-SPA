import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Input from '../Components/Input'
import TimerDisplay from '../Components/TimerDisplay'
import ControlButtons from '../Components/ControlButtons'

export default class CountdownTimer extends Component {

    state = {
        min: 0,
        moreThanHalfwayThere: false,
        pause: false,
        sec: 0,
        time: 0
    }

    setTime = (value) => {
        this.setState({
            min: Number(value),
            time: Number(value)
        })
    }

    startTimer = () => {

    }

    render() {

        const { min, moreThanHalfwayThere, pause, sec, time } = this.state

        return (
            <Box style={{marginTop: '15rem'}} >
                <Container >
                    <Input setTime={this.setTime} time={time} startTimer={this.startTimer} />
                    <TimerDisplay min={min} sec={sec} moreThanHalfwayThere={moreThanHalfwayThere} pause={pause}  />
                    <ControlButtons />
                </Container>
            </Box>
        )
    }
}
