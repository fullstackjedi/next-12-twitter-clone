'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import { useLogin } from '@twitter/queries/auth'

type Props = {
  onComplete: () => void
}

export const LoginForm = ({ onComplete }: Props) => {
  const loginMutation = useLogin()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const login = async (body: any) => {
    const { data } = await loginMutation.mutateAsync(body)
    console.log(data)

    await signIn('credentials', {
      isLoggedIn: true,
      redirect: false,
      accessToken: data.token,
      user: JSON.stringify(data.user),
    })

    onComplete()
  }

  return (
    <div className="flex flex-col">
      <Heading>Login to twitter</Heading>

      <VStack spacing="1.5rem" mt="2rem">
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
        isLoading={loginMutation.isLoading}
        onClick={handleSubmit(login)}
      >
        Login
      </Button>
    </div>
  )
}
