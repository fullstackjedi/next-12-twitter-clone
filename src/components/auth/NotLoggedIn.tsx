import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AuthModal } from './AuthModal'

export const NotLoggedIn = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Box w="25rem" px="2rem" py="1.5rem">
      <Box>
        <Heading as="h3" fontSize="1.8rem">
          New to Twitter?
        </Heading>
        <Text mt="1rem" opacity="0.7">
          Sign up to get a personalised feed
        </Text>
      </Box>

      <Flex gap="2rem" mt="2rem">
        <Button size="sm">Login</Button>
        <Button bg="brand.primary" size="sm" onClick={() => setOpenModal(true)}>
          Create Account
        </Button>
      </Flex>

      <AuthModal isOpen={openModal} toggle={setOpenModal} />
    </Box>
  )
}
