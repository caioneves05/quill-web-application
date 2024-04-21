
import { AppRouter } from '@/trpc'
import { createTRPCClient } from '@trpc/react-query'

export const trpc = createTRPCClient<AppRouter>({}) 