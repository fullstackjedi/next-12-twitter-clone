import { useToast } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const useSignup = () => {
  const toast = useToast()

  const mutation = useMutation({
    mutationFn: async (data: unknown) => {
      await axios.post('/api/auth/signup', data)
    },
    onSuccess: () => {
      toast({
        status: 'success',
        title: 'Account created.',
        position: 'top',
      })
    },
    onError: (error: AxiosError) => {
      const { message = 'Something went wrong' } = error.response?.data as {
        message: string
      }

      toast({
        status: 'error',
        title: message,
        position: 'top',
      })
    },
  })

  return mutation
}

export const useLogin = () => {
  const toast = useToast()

  const mutation = useMutation({
    mutationFn: async (data: unknown) => {
      const res = await axios.post('/api/auth/login', data)
      return res.data
    },
    onSuccess: () => {
      toast({
        status: 'success',
        title: 'Login successful.',
        position: 'top',
      })
    },
    onError: (error: AxiosError) => {
      const { message = 'Something went wrong' } = error.response?.data as {
        message: string
      }

      toast({
        status: 'error',
        title: message,
        position: 'top',
      })
    },
  })

  return mutation
}
