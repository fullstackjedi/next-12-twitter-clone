'use client'

import { Hydrate, dehydrate } from '@tanstack/react-query'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@twitter/styles'
import { QueryProviders, getQueryClient } from '@twitter/config/query'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()
  const dehydratedState = dehydrate(queryClient)

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <QueryProviders>
          <Hydrate state={dehydratedState}>{children}</Hydrate>
        </QueryProviders>
      </ChakraProvider>
    </CacheProvider>
  )
}
