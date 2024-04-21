import { fetchREquestHandler } from '@trpc/server/adapters/fetch'

const handler = (req: Request) => {
    fetchRequestHanlder({
        endpoin: '/api/trpc',
        req,
        router: appRouter
        createContext: () => ({ ... })
    })
}

export { hanlder as GET, handler as POST };