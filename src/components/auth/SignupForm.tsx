'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import { useSignup } from '@twitter/queries/auth'

export const SignupForm = () => {
  const signupMutation = useSignup()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const signup = async (data: any) => {
    await signupMutation.mutateAsync(data)
    reset()
  }

  return (
    <div className="flex flex-col">
      <Heading>Signup to twitter</Heading>

      <VStack spacing="1.5rem" mt="2rem">
        <Input {...register('name')} type="text" placeholder="Name" />
        <Input {...register('email')} type="text" placeholder="Email" />
        <Input {...register('password')} type="password" placeholder="......" />
      </VStack>

      <Button
        size="sm"
        bg="#fff"
        color="#000"
        w="100%"
        rounded="2rem"
        mt="3rem"
        isLoading={signupMutation.isLoading}
        onClick={handleSubmit(signup)}
      >
        Signup
      </Button>
    </div>
  )
}
