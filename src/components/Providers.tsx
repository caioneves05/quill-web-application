"use client"

import { PropsWithChildren, useState } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTRPCClient, httpBatchLink } from "@trpc/client"
import { AppRouter } from "@/trpc"
import { trpc } from "@/app/_trpc/client"



const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => createTRPCClient<AppRouter>({
        links: [
            httpBatchLink({
                url: 'http://localhost:3000/api/trpc'
            })
        ]
    }))

    return( 
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}

export default Providers