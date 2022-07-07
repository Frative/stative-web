import type { NextPage } from 'next'
import { Container, Typography, Box } from '@mui/material'

import messages from "../constants/messages"

import Logo from "../components/Logo"
import SearchSummoner from "../components/SearchSummoner";

const Home: NextPage = () => {
  return (
      <Container
        maxWidth={false}
        sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
      >
          <Box>
              <Logo />
              <Typography
                  fontSize={24}
                  fontWeight={100}
                  textAlign="center"
                  maxWidth={630}
                  marginBottom={3}
              >
                  { messages.en.description }
              </Typography>
              <SearchSummoner />
          </Box>
      </Container>
  )
}

export default Home
