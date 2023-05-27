'use client'

import React from 'react'
import {
  Box,
  Center,
  CloseButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'

type Props = {
  isOpen: boolean
  toggle: (val: boolean) => void
}

export const AuthModal = ({ isOpen, toggle }: Props) => {
  return (
    <Center
      display={isOpen ? 'flex' : 'none'}
      w="full"
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      bg="#232E36"
    >
      <Box bg="#000" w="30rem" p="3rem" rounded="1.2rem" pos="relative">
        <Box pos="absolute" top="2rem" right="2rem">
          <CloseButton onClick={() => toggle(false)} />
        </Box>

        <Tabs>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>

          <TabPanels pt="2rem">
            {/* Login */}
            <TabPanel>
              <LoginForm onComplete={() => toggle(false)} />
            </TabPanel>
            {/* Signup */}
            <TabPanel>
              <SignupForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  )
}
