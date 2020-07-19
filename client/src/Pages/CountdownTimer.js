import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Input from '../Components/Input'

export default class CountdownTimer extends Component {

    state = {
        time: 0
    }

    setTime = (value) => {
        this.setState({ time: Number(value)})
    }

    render() {

        const { time } = this.state

        return (
            <Box style={{marginTop: '15rem'}} >
                <Container>
                    <Input time={time} setTime={this.setTime} />
                </Container>
            </Box>
        )
    }
}
