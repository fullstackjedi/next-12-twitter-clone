'use client'

import { Box, Button, Container, Flex } from '@chakra-ui/react'
import { AuthModal } from '@twitter/components/auth/AuthModal'
import { NotLoggedIn } from '@twitter/components/auth/NotLoggedIn'
import { Tweet } from '@twitter/components/Tweet'

// import fs from 'fs'

export default function Home() {
  // fs.readFile('demofile1.html', function (err, ''))
  // ngnbkjngbjkg

  return (
    <Box as="main" w="full" h="100vh" bg="black" color="white">
      <Container maxW="100rem" h="full">
        <Flex h="full">
          <Box w="7rem"></Box>

          <Box
            flex="1"
            borderLeft="1px solid #ffffff50"
            borderRight="1px solid #ffffff50"
          >
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </Box>

          <NotLoggedIn />
        </Flex>
      </Container>

      {/* <AuthModal /> */}
    </Box>
  )
}
