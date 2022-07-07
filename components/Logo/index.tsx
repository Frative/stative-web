import React from 'react'
import { Typography } from '@mui/material'
import messages from '../../constants/messages'

const Logo = () => {
    return (
        <Typography
            fontSize={65}
            fontWeight={900}
            textAlign="center"
        >
            { messages.en.app_title }
        </Typography>
    )
}

export default Logo