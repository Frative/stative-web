import { NextPage } from "next"
import { useRouter } from 'next/router'
import { Box } from '@mui/material'

import Header from "../../components/Header";

const Summoner: NextPage = () => {
    const router = useRouter()
    const { name } = router.query

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: theme => theme.palette.secondary.main,
            }}
        >
            <Header />
        </Box>
    )
}

export default Summoner