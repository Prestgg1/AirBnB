"use client"
import { useQuery, QueryClient, QueryClientProvider } from "react-query"
import axios from "axios"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import Image from "next/image"

function fetchHomeDetail(id: string): Promise<any> {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/homes/${id}`).then(res => res.data)
}

function HomeDetailContent({ id }: { id: string }) {
    const { data, isLoading, error } = useQuery('homeDetail', () => fetchHomeDetail(id))

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        )
    }

    if (error) {
        return <div>Data Gelmedi</div>
    }

    return (
        <div className="flex justify-center items-center flex-col border-2 border-gray-300 rounded-md gap-5 text-black my-10">
            {/* Display home details here */}
            <Image className="w-full max-h-[500px] object-cover" src={data.images[0]} alt={data.title} width={500} height={500} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default function HomeDetailPage({ params }: { params: { id: string[] } }) {
    const [queryClient] = useState(() => new QueryClient())
    const id = params.id.join('/')

    return (
        <QueryClientProvider client={queryClient}>
            <HomeDetailContent id={id} />
        </QueryClientProvider>
    )
}