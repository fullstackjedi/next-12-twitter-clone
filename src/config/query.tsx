import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState, cache } from 'react'

export const getQueryClient = cache(() => new QueryClient())

export const QueryProviders = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
