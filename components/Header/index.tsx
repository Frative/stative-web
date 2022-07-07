import React from 'react'
import { Box } from '@mui/material'

import SearchSummoner from "../SearchSummoner";

const Header = () => {
    return (
        <Box
            minHeight={100}
            sx={{
                backgroundColor: theme => theme.palette.background.paper,
                boxShadow: theme => theme.shadows[1],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                flex={1}
                maxWidth={750}
            >
                <SearchSummoner />
            </Box>
        </Box>
    )
}

export default Header