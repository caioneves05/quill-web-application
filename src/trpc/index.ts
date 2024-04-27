import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { publicProcedure, router } from "./trpc"
import { TRPCError } from "@trpc/server/unstable-core-do-not-import"
import { db } from "@/database"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"


export const appRouter = router({
    authCallback: publicProcedure.query(async () => {

        const router = useRouter()
        const searchParamas = useSearchParams()
        const origin = searchParamas.get('origin')

        const { getUser } = getKindeServerSession()
        
        const user = await getUser()

        if(!user?.id || user.email) {

            router.push('/sign-in')

            return
        } 
        
        const dbUser = await db.user.findFirst({
            where: {
                id: user.id
            }
        })

        if(!dbUser) {
            await db.user.create({
                data: {
                    id: user.id,
                    email: user.email as string,
                }
            })
        }

        router.push(origin ? `/${origin}` : `/dashboard`)
    
    })
})

export type AppRouter = typeof appRouter