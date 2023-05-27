'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {
  Box,
  Button,
  Center,
  CloseButton,
  Flex,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  toggle: (val: boolean) => void
}

export const AuthModal = ({ isOpen, toggle }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const signup = async (data: any) => {
    await axios.post('/api/auth/signup', data)
    reset()
    alert('Signed up successfully')
  }

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

        <div className="flex flex-col">
          <Heading>Signup to twitter</Heading>

          <VStack spacing="1.5rem" mt="2rem">
            <Input {...register('name')} type="text" placeholder="Name" />
            <Input {...register('email')} type="text" placeholder="Email" />
            <Input
              {...register('password')}
              type="password"
              placeholder="......"
            />
          </VStack>

          <Button
            size="sm"
            bg="#fff"
            color="#000"
            w="100%"
            rounded="2rem"
            mt="3rem"
            onClick={handleSubmit(signup)}
          >
            Log in
          </Button>
        </div>
      </Box>
    </Center>
  )
}
