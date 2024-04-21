import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"

const Page = () => {
    const router = useRouter()

    const searchParamas = useSearchParams()

    const origin = searchParamas.get('origin')

    const apiResponse = await 

}

export default Page